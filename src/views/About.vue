<template>
<main id="about-body">
<div id="about-container">
    <h2 class="about-head">Bloverse was created with you in mind. Have you ever thought about creating a news blog but then balked at the thought of the effort required?.</h2>
  
</div>
<div class="container">
    <div class="page-header">
        <h1 id="timeline"></h1>
    </div>
    <ul class="timeline">
        <li>
          <div class="timeline-badge"><i class="far fa-circle"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Lorem ipsum dolor sit amet, vel accumsan liberavisse</h4>
              <div class="timeline-date"><hr size="10"> 
              <p>Dec 2017</p> </div>
              <div class="timeline-pic">
                  <img src="@/assets/meeting.jpg" alt="">
              </div>
             
            </div>
            <div class="timeline-body">
              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis.</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge"><i class="far fa-circle"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Lorem ipsum dolor sit amet, vel accumsan liberavisse</h4>
              <div class="timeline-date"><hr size="10"> 
              <p>Dec 2017</p> </div>
              <div class="timeline-pic">
                  <img src="@/assets/meeting.jpg" alt="">
              </div>
            </div>
            <div class="timeline-body">
              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis.</p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge"><i class="far fa-circle"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Lorem ipsum dolor sit amet, vel accumsan liberavisse</h4>
              <div class="timeline-date"><hr size="10"> 
              <p>Dec 2017</p> </div>
              <div class="timeline-pic">
                  <img src="@/assets/meeting.jpg" alt="">
              </div>
            </div>
            <div class="timeline-body">
            <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis.</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
             <div class="timeline-badge"><i class="far fa-circle"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Lorem ipsum dolor sit amet, vel accumsan liberavisse</h4>
               <div class="timeline-date"><hr size="10"> 
              <p>Dec 2017</p> </div>
              <div class="timeline-pic">
                  <img src="@/assets/meeting.jpg" alt="">
              </div>
            </div>
            <div class="timeline-body">
            <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis.</p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge"><i class="far fa-circle"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Lorem ipsum dolor sit amet, vel accumsan liberavisse</h4>
               <div class="timeline-date"><hr size="10"> 
              <p>Dec 2017</p> </div>
              <div class="timeline-pic">
                  <img src="@/assets/meeting.jpg" alt="">
              </div>
            </div>
            <div class="timeline-body">
                <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis.</p>
            </div>
          </div>
        </li>
  
        <li class="timeline-inverted">
        <div class="timeline-badge"><i class="far fa-circle"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Lorem ipsum dolor sit amet, vel accumsan liberavisse</h4>
              <div class="timeline-date"><hr size="10"> 
              <p>Dec 2017</p> </div>
              <div class="timeline-pic">
                  <img src="@/assets/meeting.jpg" alt="">
              </div>
            </div>
            <div class="timeline-body">
                <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis.</p>
            </div>
          </div>
        </li>
    </ul>
</div>
</main>
</template>

<script>
export default {
    
}
</script>

<style>
.timeline .fa-circle{
    color:#096DD9;
    background: #f5f5f5;
    font-size: 25px;
   font-weight: 900;
   z-index: -100;

}
.timeline-date{
    display:flex;
    align-items: center;
    margin:10px 0
    

}
.timeline-date hr{
    width:15px;
border: 1px solid #096DD9
    
}
.timeline-date p{
    padding-left: 10px;
    color:hsla(0, 0%, 0%, 0.45)
}
.about-head{
    font-size: 16px;
    line-height: 30px;
    color: black;
    font-weight: 600;
    text-align: center;
    width:568px;
    margin: auto;
    padding-top: 20px;
    letter-spacing: 1.5px;


}
.timeline-pic img{
    width:100%;
    height:187px;
    position:relative;
   margin-bottom: 20px
}
.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
  margin-top: 60px;
  width: 750px;
  margin: 60px auto
}
.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 3px;
  background-color: #096DD9;
  left: 50%;
  margin-left: -1.5px;
}
.timeline > li {
  margin-bottom: 20px;
  position: relative;
}
.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}
.timeline > li:after {
  clear: both;
}
.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}
.timeline > li:after {
  clear: both;
}
.timeline > li > .timeline-panel {
  width: 320px;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  padding: 20px;
  position: relative;
  background: white

}
.timeline > li > .timeline-panel:before {
  position: absolute;
  top: 26px;
  right: -15px;
  display: inline-block;
  border-top: 15px solid transparent;
  border-left: 15px solid #ccc;
  border-right: 0 solid #ccc;
  border-bottom: 15px solid transparent;
  content: " ";
}
.timeline > li > .timeline-panel:after {
  position: absolute;
  top: 27px;
  right: -14px;
  display: inline-block;
  border-top: 14px solid transparent;
  border-left: 14px solid #fff;
  border-right: 0 solid #fff;
  border-bottom: 14px solid transparent;
  content: " ";
}
.timeline > li > .timeline-badge {
  color: #fff;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 1.4em;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 50%;
  margin-left: -25px;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}
.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
}
.timeline > li.timeline-inverted > .timeline-panel:before {
  border-left-width: 0;
  border-right-width: 15px;
  left: -15px;
  right: auto;
}
.timeline > li.timeline-inverted > .timeline-panel:after {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}
.timeline-badge.primary {
  background-color: #2e6da4 !important;
}
.timeline-badge.success {
  background-color: #3f903f !important;
}
.timeline-badge.warning {
  background-color: #f0ad4e !important;
}
.timeline-badge.danger {
  background-color: #d9534f !important;
}
.timeline-badge.info {
  background-color: #5bc0de !important;
}
.timeline-title {
  margin-top: 0;
  color: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px
}
.timeline-body > p,
.timeline-body > ul {
  margin-bottom: 0;
}
.timeline-body > p + p {
  margin-top: 5px;
}
</style>
