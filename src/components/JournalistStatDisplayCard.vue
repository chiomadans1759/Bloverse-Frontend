<template>
  <div class="stat-card">
    <div class="top">
      <h2 class="title title_underline">{{title | toUpperCase}}</h2>
      <Icon type="ios-stats-outline" style="font-size: 25px; transform: scale(1.5,1);" id="icon-style" />
    </div>
    <div class="analysis">
      <p style="color: black; font-size: 15px;">Articles</p>
      <div  class="sub-analysis">
        <div>
          <span :style="{color: 'var(--primary)'}">{{stats.today}}&nbsp;&nbsp;</span>
          <span style="color: grey;">Today</span> 
        </div>
        <hr :style="{margin: '.2rem 0'}" />
        <div>
          <span :style="{color: 'var(--primary)'}">{{stats.week}}&nbsp;&nbsp;</span>
          <span style="color: grey;">This week</span>
        </div>
      </div>
    </div>
    <div class="total">
      <span :style="{color: '#333333', fontWeight: 'bold', fontSize: '20px'}">Total {{title}}</span>
      <span   :style="{fontWeight: 'bold', fontSize: '20px'}">{{stats.total}}</span>
    </div>
  </div>
</template>

<script>
  import { Icon } from 'iview';
  import lang from 'iview/dist/locale/en-US';


  export default {
      components: {
      Icon
    },

    props: ['variant', 'title', 'stats'],

  }
  
</script>


<style >
  .stat-card {
    height: 180px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem .7rem;
  }

  .stat-card > * {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .stat-card .analysis {
    align-items: center;
    margin-top: 10px;
  }

  .title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    font-size: 24px;
    color: #828282;
  }

  .title_underline{
    position:relative;
  }
 
 .title_underline:after {
  right: 0;
  position: absolute;
  content: "";
  width: 40%;
  height: 3px;
  bottom: -4px;
  left: 0;
  /* margin: 0 auto; */
  background: #2f80ed;
 }


  @media screen and (min-width:768px) and (max-width:956px) {
    .title{
      font-size: 15px;
    }

    .analysis{
      margin-top:20px;
    }

    hr{
      margin: 0;
    }

    .sub-analysis{
      font-size: 10px
    }
  }

  @media screen and (max-width:768px) {
    .stat-card{
      margin-top: 15px;
    }
  }

</style>

