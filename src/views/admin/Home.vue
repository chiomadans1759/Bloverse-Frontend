<template>
<div>
    <Layout>
        <Header style="background:#5b6270; color: white; min-height:100px ">
          <Row type="flex" justify="space-between" align="middle" style="margin: 40px">
            <Col>
              <img src="https://res.cloudinary.com/naera/image/upload/v1532035571/bloverse/b_blue.png">
              <span style="height: 30px; font-size: 24px;">BLOVERSE</span></Col>
            <Col ><span style="padding-right:10px">Administrator</span>
              <Button type="default" @click="logOut" ghost>LOGOUT</Button>
            </Col>
        </Row>
      </Header>
    </Layout>
  <Row type="flex" justify="space-around" style="padding:20px; margin:30px">
      <Col span="6" class="status">
          <a href = #>
            <Card :border="true">
                <p slot="title" style="font-size: 25px; color: #5b6270"> TOTAL </p>
                <p style="padding: 5px; color: blue; font-size: 40px;"><b>{{stats.total}}</b></p>
            </Card>
          </a>
      </Col>
      <Col span="6" class="status">
          <a href = #>
            <Card shodow>
              <p slot="title"  style="font-size: 25px; color: #5b6270"> ACCEPTED </p>
              <p style="padding: 5px; color: blue; font-size: 40px;"> <b>{{stats.accepted}}</b> </p>
            </Card>
          </a>
      </Col>
      <Col span="6" class="status">
        <a href = #>
          <Card :bordered="true">
          <p slot="title"  style="font-size: 25px; color: #5b6270"> REJECTED </p>
          <p style="padding: 5px; color: blue; font-size: 40px;"> <b>{{stats.rejected}}</b> </p>
          </Card>
        </a>
      </Col>
  </Row>
  <DisplayApplicants @updated="getStats" :pending-users="pendingUsers"></DisplayApplicants>
</div>
</template>

<script>
  //import Utility from '../../Utility.js';
  import DisplayApplicants from '../../components/DisplayApplicantsTable.vue';


  import { Row, Col, Card, Layout, Header, Button } from 'iview';
  export default {
      components: {
        Row, ICol: Col, Card, Layout, Header, IButton: Button, DisplayApplicants,
      },
      data: function() {
return {
        stats: {},
        pendingUsers: [],
      };
},
      async mounted() {
        let response,
          categories,
          countries,
          session;

        if (localStorage.getItem('admin')) {
          // Retrieve the object from storage
          const retrievedObject = localStorage.getItem('admin');
          session = JSON.parse(retrievedObject);
        }


        categories = await Utility.categories;
        countries = await Utility.countries;

        store.commit({
          type: 'init', categories, countries, session,
        });
        response = await this.$http.get('/api/v1/applicants/');
        this.pendingUsers = response.data;
        await this.getStats();
      },
      methods: {
        logOut() {
          localStorage.clear();
          window.location = '/login';
        },
        async getStats() {
          const token = store.state.session && store.state.session.token;

          const config = { headers: { Authorization: `Token ${token}` } };
          const response = await this.$http.get('/api/v1/applicants/stats/', config);
          const { status, data } = response.data;
          if (status === 'success') {
            this.stats = data.applicants;
          }
        },
      },
  }
  
</script>


<style>
  /* Styles should be here */
  .status{
    min-height: 150px;
    padding: 20px;
    text-align: center; 
  }

  body {
  background: #eee;
  }

  img {
  margin-right: 5px;
  width: 24px;
  border-radius: 10px;
  }

  #table-section {
    padding: 0 2rem;
  }

  #table-section > * {
    margin: 1rem 0;
  }


</style>