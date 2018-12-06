<template>
<div class="container">
  <Row id="draft-container">
    <h2 style="font-size: 16px; font-family: 'Montserrat', sans-serif; margin-bottom: 2rem; margin-top: 2rem;">Today</h2>
    <Col v-for="i in 5" :key="i">
      <Card id="draft-card">
        <div style="margin: 1rem;">
          <span id="draft-details">
          <p class="text-uppercase">Category</p>
          <p class="text-uppercase">1 min ago</p>
          </span>
          <p class="text-bold" id="draft-text">I took a break from mum guilt for the day</p>
          <p  id="draft-textt">I took a break from mum guilt for the day</p>
        </div>
      </Card>
    </Col>
  </Row>
</div>
  
</template>

<script>
import { Row, Col, Card } from 'iview';

export default {
  components: { Row, Col, Card }
  
}
</script>

<style scoped>

#draft-card {
  width: 568px;
  height: 100px;
  margin-bottom: 2rem;
}

#draft-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
}


#draft-details {
  display: flex;
  justify-content: space-between;
}

#draft-details p {
  font-size: 12px;
  font-family: 'Montserrat'
}

#draft-text {
  font-size: 16px;
  font-family: 'Montserrat';
  margin-top: 1rem;

}

#draft-textt {
  font-size: 14px;
  font-family: 'Montserrat';
  margin-top: 1rem;

}
</style>
