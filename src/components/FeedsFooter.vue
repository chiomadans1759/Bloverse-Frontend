<template>
    <footer class="feeds-footer">
        <Row class="feeds-row" type="flex" justify="space-between" align="middle">
            <Col>
                <div id="footer-links">
                    <p style="font-size: 14px; opacity: 85%;  font-family: 'Comfortaa', cursive;">bloverse </p>
                     <span id="vr-line"></span>
                     <p id="links-p">Terms</p>
                     <p id="links-p">Privacy</p>
                     <p id="links-p">About</p>
                     <p id="links-p"><i class="fas fa-ellipsis-h" id="footer-icon"></i></p>
                </div>
            </Col>
            <Col>
                <p id="year-text">2018 Bloverse. All Right Reserved</p>
            </Col>
        </Row>
    </footer>  
</template>

<script>
import { Row, Col} from 'iview';

export default {
  components: { Row, Col}
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Montserrat');

.feeds-footer {
    background: #F5F5F5;
    height: 32px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}

#vr-line {
    border-left:1px solid rgb(160, 156, 156);
    height: 12px;
    margin-left: 1rem;
    margin-top: 6px;

}
#footer-links{
    display: flex;
   justify-content: space-between;
}

#links-p{
    margin-left:2rem;
    margin-top: 3px;
    font-family: 'Comfortaa', cursive;
}

#year-text {
    font-family: 'Comfortaa', cursive;
}

@media screen and (max-width: 600px) {
  .feeds-footer {
    height: 45px;
  }
}

</style>
