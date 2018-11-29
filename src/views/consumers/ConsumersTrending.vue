<template>
    <div>   
        <section class="trending-section">
        <h1 id="trending-text">Trending</h1>
        <ul class="trending-wrapper">
                <li :style="{gridArea: 'col'+i}"  v-for="(category, i) in categories" :key="category">
                    <Card id="trending-content">
                        <img :src="category.imgURL" alt="Trending-image">
                            <div id="trending-note">
                                <p>{{category.note}}</p> 
                            </div>
                            <div id="trending-info">
                                <p>{{category.name}}</p> 
                            </div>
                    </Card>                
                </li>           
            </ul> 
        </section>
        <div>
            <TheFooter/>
        </div>
    </div>
</template>
<script>
import { Row, Col, Card } from 'iview';
import TheFooter from '../../components/TheFooter.vue';

export default {
  components: { Row, Col, Card, TheFooter},  

  data () {
    return {
      categories: [
        {
          imgURL: require('./../../assets/trending/tech.jpg'),
          name: "Technology",
          note: "FBI forces suspect to unlock iPhone X with Face ID"
        },
        {
          imgURL: require('./../../assets/trending/business.jpg'),
          name: "Business",
          note: "Former students say that Apple cofounder Steve Wozn..."
        },
        {
          imgURL: require('./../../assets/trending/entertainment.jpg'),
          name: "Entertainment",
          note: "Kanye West calls for the abolition of the 13th amendm.."
        },
        {
          imgURL: require('./../../assets/trending/health.jpg'),
          name: "Health",
          note: "WellCare Health's (WCG) Buyout to Expand Medic..."
        }, 
        { imgURL: require('./../../assets/trending/vacation.jpg'),
          name: "Life style",
          note: "FBI forces suspect to unlock iPhone X with Face ID"
        },
        {
          imgURL: require('./../../assets/trending/comedy.jpg'),
          name: "Comedy",
          note: "Chris Kattan High School Comedy ‘How to Get Girls’ La..."
        },
        {
          imgURL: require('./../../assets/trending/relationship.jpg'),
          name: "Relationship",
          note: "Rosie O’Donnell Opens Up About Her Repaired Re..."
        },
        {
          imgURL: require('./../../assets/trending/fashion.jpg'),
          name: "Fashion",
          note: "The Most Stunning Moments From Paris Fashion Week, Cu..."
        },
        {
          imgURL: require('./../../assets/trending/politics.jpg'),
          name: "Politics",
          note: "Macedonia leader faces political battle on name deal..."
        },
        {
          imgURL: require('./../../assets/trending/events.jpg'),
          name: "Events",
          note: "Ask him, he wrote it! - Mourinho brushes off Zidane..."
        },
        {
          imgURL: require('./../../assets/trending/travel.jpg'),
          name: "Travel",
          note: "Ask him, he wrote it! - Mourinho brushes off Zidane..."
        }
      ]
    }
  },

}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.trending-section {
    margin:2rem auto;
    width:70%   
}
.trending-wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas: 
         "col0 col0 col0 col0 col1 col1 col1 col1 col2 col2 col2 col2"
         "col3 col3 col3 col3 col3 col3 col3 col3 col4 col4 col4 col4"
         "col5 col5 col5 col5 col6 col6 col6 col6 col6 col6 col6 col6"
         "col7 col7 col7 col7 col7 col7 col8 col8 col8 col8 col8 col8"
         "col9 col9 col9 col9 col9 col10 col10 col10 col10 col10 col10 col10";
    grid-gap: 2rem;
}

#trending-text {
    margin: 30px 0;
}
#trending-content { 
    height: 300px; 
    background: #000;
    border-radius: 10px;
    color:white;  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
} 
ul li{
    list-style-type:none;
}
#trending-content img{
    width:100%;
    height:100%;
    object-fit: cover;
    object-position: 50%;
    position: absolute;
    opacity: 0.4;
    border-radius: 10px;
    top:0; 
}
#trending-content img:hover { 
    opacity: 0.7; 
}
#trending-info {
    display:flex;
     align-items: center;
     margin: 0 auto;
     width:85%;
     justify-content: space-between;
     font-size: 18px;
     color:#BDBDBD;
     padding-bottom: 15px;
     font-family: roboto;  
} 
#trending-note {
     display:flex;
     align-items: center;
     margin: 0 auto;
     width:85%;
     justify-content: space-between;
     font-size: 18px;
     color:white;
     padding-bottom: 15px;
     font-family: roboto;  
}

@media screen and (max-width: 600px) {
    .trending-wrapper {  
        grid-template-columns: repeat(1, 1fr);
        grid-template-areas: 
            "col0"
            "col1"
            "col2"
            "col3"
            "col4"
            "col5"
            "col6"
            "col7"
            "col8"
            "col9"
            "col10"; 
    } 
    .trending-section {
        margin:1rem auto;
        width:80%   
    }
    #trending-text {
        margin: 10px 0;
    } 
}

@media only screen and (max-width: 840px) and (min-width: 600px) { 
    .trending-section {
        margin:1rem auto;
        width:90%   
    }
    #trending-content { 
        height: 170px;  
    }
    #trending-text {
        margin: 15px 0;
    }
    #trending-note { 
     width:90%; 
     font-size: 13px; 
    }
    .trending-wrapper { 
     grid-gap: 1rem;
    }
}
</style>
