<template>
    <Row>
        <Col  :md="6" :sm="24" :xs="24" class = "box3" type="flex" align="middle" > 
            <Row class ="box3-content" offset ="4" :sm="24" :md="16" :xs="24"></Row>
            <Row class ="box3-content" offset ="4" :sm="24" :md="16" :xs="24"></Row>
        </Col>
    </Row>
</template>
 
<script >
import { Icon, Row, Col } from "iview"; 

export default {
  components: { Icon, Row, Col}
}  
</script>

 <style scoped>    
    .box3{                
        align-items: center; 
    }
    .box3-content{
        border: 1px solid #ccc; 
        height:20rem;
        width:70%;
        margin:1.5rem 0 1rem 0;
        border-radius:5px;   
    }
    
@media only screen and (max-width: 600px) { 
    .box3 {
        display: none;
    }   
}

@media only screen and (max-width: 840px) {
   .box3 {
        display: none;
    } 
}

</style>
