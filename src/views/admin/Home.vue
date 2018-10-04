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
  <DisplayApplicants></DisplayApplicants>
</div>
</template>

<script>
  //import Utility from '../../Utility.js';
  import DisplayApplicants from '../../components/DisplayApplicantsTable.vue';
  import { mapActions, mapGetters, mapState } from 'vuex';


  import { Row, Col, Card, Layout, Header, Button } from 'iview';
  export default {
      components: {
        Row, ICol: Col, Card, Layout, Header, IButton: Button, DisplayApplicants,
      },
      computed: {
        stats: function(){
          let total, accepted, rejected;

          accepted = this.acceptedApplicants.length;
          rejected = this.rejectedApplicants.length;
          total = this.general.applicants.length;

          return { accepted, rejected, total };
        },
        ...mapState([
          'general'
        ])
      },
      methods: {
        logOut() {
          localStorage.clear();
          window.location = '/login';
        },
        ...mapActions([
          'getAllApplicants'
        ]),

        ...mapGetters([
          'acceptedApplicants',
          'rejectedApplicants',
        ])
      },
      async mounted() {
        await this.getAllApplicants()
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