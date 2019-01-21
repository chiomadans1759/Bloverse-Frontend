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
          <a href="#">
            <Card :border="true">
              <p slot="title" style="font-size: 25px; color: #5b6270">TOTAL</p>
              <p style="padding: 5px; color: blue; font-size: 40px;">
                <b>{{stats.total}}</b>
              </p>
            </Card>
          </a>
        </Col>
        <Col span="6" class="status">
          <a href="#">
            <Card shodow>
              <p slot="title" style="font-size: 25px; color: #5b6270">ACCEPTED</p>
              <p style="padding: 5px; color: blue; font-size: 40px;">
                <b>{{stats.accepted}}</b>
              </p>
            </Card>
          </a>
        </Col>
        <Col span="6" class="status">
          <a href="#">
            <Card :bordered="true">
              <p slot="title" style="font-size: 25px; color: #5b6270">REJECTED</p>
              <p style="padding: 5px; color: blue; font-size: 40px;">
                <b>{{stats.rejected}}</b>
              </p>
            </Card>
          </a>
        </Col>
      </Row>
      <DisplayApplicants></DisplayApplicants>
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
      ready: false
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
      let total, accepted, rejected;

      accepted = this.acceptedApplicants.length;
      rejected = this.rejectedApplicants.length;
      total = this.general.applicants.length;

      return { accepted, rejected, total };
    },
    ...mapState(["general"]),
    ...mapGetters(["acceptedApplicants", "rejectedApplicants"])
  },
  methods: {
    ...mapActions(["getAllApplicants", "clearSession"]),
    logOut() {
      if (this.clearSession()) this.$router.push("/admin/login");
    }
  },
  async created() {
    await this.getAllApplicants();
  }
};
</script>

<style scoped>
.status {
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

#admin-header {
  background-color: #2d3436;
}
</style>
