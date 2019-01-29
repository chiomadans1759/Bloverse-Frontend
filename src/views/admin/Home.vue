<template>
  <div>
    <Layout>
      <Header id="admin-header">
        <Row type="flex" justify="space-between">
          <Col>
            <img
              src="https://res.cloudinary.com/aolfiligre/image/upload/v1533663492/freed.png"
              style="width:40px"
            >
          </Col>
          <Col>
            <Button type="error" @click="logOut">LOGOUT</Button>
          </Col>
        </Row>
      </Header>
    </Layout>
    <div id="admin-body">
      <Row type="flex" justify="space-around" style="padding:20px; margin:20px">
        <Col span="6" class="status">
          <Card :border="true">
            <p slot="title" style="font-size: 25px; color: #5b6270">TOTAL</p>
            <p style="padding: 5px; color: blue; font-size: 40px;">
              <b>{{stats.total}}</b>
            </p>
          </Card>
        </Col>
        <Col span="6" class="status" @click="selectedCategory = 'pending'">
          <Card :border="true">
            <p slot="title" style="font-size: 25px; color: #5b6270">PENDING</p>
            <p style="padding: 5px; color: blue; font-size: 40px;">
              <b>{{stats.pending}}</b>
            </p>
          </Card>
        </Col>
        <Col span="6" class="status" @click="selectedCategory = 'accepted'">
          <Card shodow>
            <p slot="title" style="font-size: 25px; color: #5b6270">ACCEPTED</p>
            <p style="padding: 5px; color: blue; font-size: 40px;">
              <b>{{stats.accepted}}</b>
            </p>
          </Card>
        </Col>
        <Col span="6" class="status" @click="selectedCategory = 'rejected'">
          <Card :bordered="true">
            <p slot="title" style="font-size: 25px; color: #5b6270">REJECTED</p>
            <p style="padding: 5px; color: blue; font-size: 40px;">
              <b>{{stats.rejected}}</b>
            </p>
          </Card>
        </Col>
      </Row>
      <DisplayApplicants @finishedProcess="getApplicantsAndSetData" :tableData="selectedCategoryData"></DisplayApplicants>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { Row, Col, Card, Layout, Header, Button } from "iview";
import DisplayApplicants from "../../components/DisplayApplicantsTable.vue";

export default {
  data() {
    return {
      ready: false,
      selectedCategory: 'pending',
      selectedCategoryData: []
    };
  },
  components: {
    Row,
    ICol: Col,
    Card,
    Layout,
    Header,
    Button,
    DisplayApplicants
  },
  computed: {
    stats: function() {
      let total, accepted, rejected, pending;

      accepted = this.acceptedApplicants.length;
      rejected = this.rejectedApplicants.length;
      pending = this.pendingApplicants.length;

      total = accepted + rejected + pending;

      return { accepted, rejected, pending, total};
    },
    ...mapState(["general"]),
    ...mapGetters(["acceptedApplicants", "rejectedApplicants", "pendingApplicants"])
  },
  watch: {
    selectedCategory(val){
      this.getDataForCategory(val)
    }
  },
  methods: {
    ...mapActions(["clearSession", "getAllApplicants"]),
    getDataForCategory(category){
      //gets data of applicants for the current category
      switch(category){
      case 'pending':
        this.selectedCategoryData = this.pendingApplicants;
        break;
      case 'accepted':
        this.selectedCategoryData = this.acceptedApplicants;
        break;
      case 'rejected':
        this.selectedCategoryData = this.rejectedApplicants;
        break;
      }
    },
    async getApplicantsAndSetData(){
      await this.getAllApplicants();
      this.getDataForCategory(this.selectedCategory)
    },
    logOut() {
      if (this.clearSession()) this.$router.push("/admin/login");
    }
  },
  async created() {
    await this.getApplicantsAndSetData();
  }
};
</script>

<style scoped>
.status {
  min-height: 150px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
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

#admin-header {
  background-color: #2d3436;
}
</style>
