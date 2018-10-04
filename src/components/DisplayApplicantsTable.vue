<template>
  <section id="table-section">
    <Row type="flex" align="middle" justify="space-between">
      <Col :sm="5">
        <Row type="flex" align="middle" justify="space-between">
          <Col span="4">Show</Col>
          <Col span="14">
            <Select v-model="entriesLength">
              <Option v-for="item in list" :value="item" :key="item">{{ item }}</Option>
            </Select>
          </Col>
          <Col span="4">entries</Col>
        </Row>
      </Col>
      <Col :sm="6">
        <Input search v-model="searchTerm" placeholder="Search by Names..."  size ="large"/>
      </Col>
    </Row>
    <Table :loading="usersLoading" ref="tblUser" border height="400" stripe :columns="tblColumns" :data="displayedUsers" @on-selection-change="changeSelection"></Table>
    <Row  type="flex" justify="space-between">
      <Col>
        <Button type="error" :disabled="!selectedUsers || updatingUsersStatus" @click="$refs.tblUser.selectAll(false)">Clear Selection</Button>
        <Button type="success" :disabled="!selectedUsers" :loading="updatingUsersStatus" @click="processSelectedUsers">Process Selected Users</Button>
      </Col>
      <Col>
        <Page @on-change="currPage = $event" style="float: right;" :total="users.length" :page-size="entriesLength" show-total /> 
      </Col>
    </Row>
  </section>
</template>



<script>

	import Vue from 'vue';
	import TableExpand from './JournalistMoreDetails.vue';
	import SelectStatus from './SelectJournalistStatus.vue';

	// Registers Dropdown to select a new status globally
  Vue.component('SelectStatus', SelectStatus);

  import { Row, Col, Table, Input, Page, Select, Option, Button } from 'iview';
  import { mapState, mapGetters } from 'vuex'

  export default {
  	name: 'MyTable',
  	components: { Row, Col, Table, Input, Page, Select, Option, Button },
  	data: function(){
      return {
      	updatingUsersStatus: false,
      	tblColumns: [
      	  {
      	    type: 'expand',
      	    width: 50,
      	    render: (h, params) => h(TableExpand, {
      	      props: {
      	        row: params.row,
      	      },
      	    }),
      	  },
      	  {
      	    type: 'selection',
      	    width: 60,
      	    align: 'center',
      	  },
      	  {
      	    title: 'Name',
      	    key: 'name',
      	  },
      	  {
      	    title: 'Category',
      	    key: 'category',
      	    filters: [],
      	    filterMultiple: false,
      	    filterMethod(value, row) {
      	      return row.category.indexOf(value) > -1;
      	    },

      	  },
      	  {
      	    title: 'Country',
      	    key: 'country',
      	    filters: [],
      	    filterMultiple: false,
      	    filterMethod(value, row) {
      	      return row.country.indexOf(value) > -1;
      	    },
      	  },
      	  {
      	    title: 'Followers',
      	    key: 'followers',
      	    sortable: true,
      	    sortType: 'desc',
      	  },
      	  {
      	    title: 'Articles',
      	    key: 'noOfArticles',
      	    sortable: true,
      	    sortType: 'desc',
      	  },
      	  {
      	    title: 'Status',
      	    key: 'status',
      	    width: 150,
      	    align: 'center',
      	    render: (h, params) => h('SelectStatus', {
              props: {
                row: params.row,
              },
              on: {
                statusChanged: (newStatus) => {
                  const user = this.users.find(user => user.id === params.row.id);
                  user.status = newStatus;
                },
              },
            }),
      	  },
      	],
      	entriesLength: 10,
      	list: [10, 20, 50, 100, 200],
      	searchTerm: null,
      	usersLoading: true,
      	currPage: 1,
      	selectedUsers: null,
      	processedUsersId: []
      }
  	},
  	computed: {
  	  displayedUsers() {
  	    let users = this.users;
  	    if (this.searchTerm) {
  	      users = users.filter(user => user.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  	    }
  	    let limit,
  	      offset;
  	    offset = (this.currPage - 1) * this.entriesLength;
  	    limit = this.entriesLength * this.currPage;
  	    return users.slice(offset, limit);
  	  },
  	  // Process pending users to produce a format that matches the table data
  	  users() {
  	  	let users;
  	  	users = this.pendingApplicants.filter(user=> {
  	  		return !this.processedUsersId.includes(user.id)
  	  	})
  	    users = users.map((user) => {
  	      let {
  	        id, first_name, last_name, email, phone_number: phone, linkedin_url: linkedIn, twitter_url: twitter, articles, status, country, category,
  	      } = user;

  	      const name = `${first_name} ${last_name}`;
  	      category = this.general.categories.find(cat => cat.id === category);
  	      category = category.name;
  	      country = this.general.countries.find(con => con.id === country);
  	      country = country.name;

  	      return {
  	        id,
  	        name,
  	        category,
  	        country,
  	        followers: 0,
  	        noOfArticles: articles.length,
  	        status,
  	        email,
  	        phone,
  	        articles,
  	        twitter,
  	        linkedIn,
  	      };
  	    });
  	    this.usersLoading = false;
  	    return users;
  	  },

  	  ...mapState([
  	    'general',
  	  ]),
      ...mapGetters([
        'pendingApplicants'
      ])
  	},
  	
  	methods: {
  		changeSelection(selections) {
  		  this.selectedUsers = selections.length > 0 ? selections : null;
  		},
  		processSelectedUsers(){
        this.updatingUsersStatus = true;
        let url, pre, action;
        pre = '/api/v1/applicants';
        let processedUsers = [];
        console.log(this.selectedUsers);
  			this.selectedUsers.forEach(async user=> {
  				if(user.status === 1)
  					return;
  				action = user.status === 2 ? `${user.id}/accept/` : `${user.id}/decline/`	
  				url = `${pre}/${action}`;
  				const statusUpdated = await this.updateStatus(url);
  				if (statusUpdated) {
  					processedUsers.push(user);
  				}
  			})
        const currentProcessedUsersId = processedUsers.map(user=> user.id);
  			this.processedUsersId.push(...currentProcessedUsersId);

  			this.$Message.success('Process Successfull');
  			this.updatingUsersStatus = false;
  			this.$emit('updated');

  		},
  		async updateStatus(url){
  			const token = this.session && this.session.token;
  			const config = { headers: { Authorization: `Token ${token}` } };
  			try{
          const response = await this.$http.put(url, {}, config)
          const { status, data } = response.data;
          return status === "success";
  			}catch(error){
          return false;
  			}
  		}
  	}
  }



</script>