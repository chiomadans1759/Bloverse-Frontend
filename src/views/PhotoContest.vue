<template>
  <main id="photo-contest">
      <photo-contest-header/>
    <section class="text-center text-white my-0 position-relative d-flex justify-content-center align-items-center top-section">
        <div class="">
            <div class="overlay"></div>
            <img class="img-fluid w-100" src="@/assets/photo5.jpg" alt=""> 
        </div>
        <div class="container" style="z-index: 1;">
            <div class="row">
                <div class="col-md-12">
                    <div class="mb-5">
                        <p class="display-2 font-weight-normal mb-3">Bloverse Photo Contest</p>
                        <p class="lead">‘The Story Behind The Photo’</p>
                        <a class="btn btn-primary mt-5">Publish a Photo Contest</a>
                    </div>
                    <div class="pt-3">
                        <button class="btn rounded-circle btn-play"><i class="fas fa-play"></i></button><span class="ml-3">Watch Video</span>
                    </div>
                </div>
            </div>
            <!--end of row-->
        </div>
        <!--end of container-->
    </section>
    <section class="detail-wrap">
        <div class="container">
            <div class="row justify-content-center align-items-center detail-content">
                <div class="col-sm-10 col-md-9 col-lg-5 pr-lg-4">
                            <div class="detail">
                                <h1 class="title">
                                    How to enter:
                                </h1>
                                <ol>
                                    <li><a href="">Apply</a> to be a content creator</li>
                                    <li>Submit the lifestyle photo and the story behind it as a published post on bloverse</li>
                                    <li>Share your article on instagram, facebook, twitter followed by the hashtag <span class="font-weight-bold">#JoinTheBloverse</span></li>
                                </ol>
                            </div>
                </div>
                <div class="col-lg-6 d-none d-xl-block d-lg-block">
                    <div class="d-flex justify-content-center image-wrap">
                        <img class="img-fluid w-100" src="@/assets/photo6.jpg" alt=""> 
                    </div>
                </div>
            </div>
            <!--end of row-->
            <div class="row justify-content-center align-items-center detail-content">
                <div class="col-lg-6 d-none d-xl-block d-lg-block">
                    <div class="d-flex justify-content-center image-wrap">
                        <img class="img-fluid w-100" src="@/assets/photo4.jpg" alt=""> 
                    </div>
                </div>
                <div class="col-sm-10 col-md-9 col-lg-5 pl-lg-4">
                    <div class="detail">
                        <h1 class="title">Judging Criteria:</h1>
                        <p>Each view is worth 1 point.</p>
                        <p>All publications are ranked based on the total number of points accrued over the course of the contest.</p>
                    </div>
                </div>
            </div>
            <!--end of row-->
            <div class="row justify-content-center align-items-center detail-content reward">
                <div class="col-lg-3 col-md-5 col-sm-6">
                    <div class="card text-center gold mb-0">
                        <div class="card-body p-0 pb-5">
                            <img class="" src="@/assets/gold-medal.svg" alt=""> 
                            <div class="mt-4">
                                <div class="card-title font-weight-bold">1st Price</div>
                                <div class="display-1 font-weight-normal">$150</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-5 col-sm-6">
                    <div class="card text-center silver mb-0">
                        <div class="card-body p-0 pb-5">
                            <img class="" src="@/assets/Silver-medal.svg" alt=""> 
                            <div class="mt-4">
                                <div class="card-title font-weight-bold">2nd Price</div>
                                <div class="display-1 font-weight-normal">$100</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-5 col-sm-6">
                    <div class="card text-center bronze mb-0">
                        <div class="card-body p-0 pb-5">
                            <img class="" src="@/assets/bronze-medal.svg" alt=""> 
                            <div class="mt-4">
                                <div class="card-title font-weight-bold">3rd Price</div>
                                <div class="display-1 font-weight-normal">$50</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-5 col-sm-6">
                    <div class="card text-center platinum mb-0">
                        <div class="card-body p-0 pb-5">
                            <img class="" src="@/assets/platinum-medal.svg" alt=""> 
                            <div class="mt-4">
                                <div class="card-title font-weight-bold">Highest Ranked Creator</div>
                                <div class="display-1 font-weight-normal">$100</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--<div class="row justify-content-center align-items-center detail-content reward">
                <div class="col-lg-4">
                    <div class="card platinum mb-0">
                        <div class="card-body pt-0 d-flex justify-content-center">
                            <img class="" src="@/assets/Silver-medal.svg" alt=""> 
                            <div class="align-self-center">
                                <div class="card-title font-weight-bold">Highest Ranked Creator</div>
                                <div class="display-1 font-weight-normal">$100</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>-->
            <!--end of row-->
        </div>
        <!--end of container-->
    </section>   
    <section>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">

                </div>
            </div>

        </div>
    </section>
  </main>
</template>

<script>
import PhotoContestHeader from '@/components/PhotoContestHeader';

export default {
  components: {
    PhotoContestHeader
  },
  data: function() {
    return {
      
    };
  },

  computed: {
    
  },
  methods: {
    
  },

};
</script>

<style scoped>
    #photo-contest {
        font-size: 1rem;
        line-height: 1.6;
    }
  section  {
    margin: 7rem 0;
  }
  .top-section {
      height:38.75rem;
      overflow: hidden;
  }
  .top-section img {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    opacity: .35;
  }
  .btn-play {
        width: 4.5rem;
        height: 4.5rem;
  }
 .image-wrap {
    height: 23rem;
    border-radius: 1rem;
    overflow: hidden;
    border: rgba(0, 0, 0, .15);
    position: relative;
    background: #FFF;
  }

 .image-wrap img {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
    .detail-wrap .detail-content {
      margin-bottom: 7rem;
    }
    .detail-wrap .detail-content:last-child {
      margin-bottom: 0;
    }
    .detail ol li, .detail p, .reward .card .card-title {
        margin-bottom: 0.5rem;
    }
   .detail ol li {
    padding-left: .5rem;
   }
  .detail ol {
    margin-left: 1rem;
  }
  .detail .title {
    margin-bottom: 1.5rem;
  }
  .detail h1.title {
    font-size: 1.875rem;
    color: #252525;
  }
  .overlay {
    height: 100%;
    width: 100%;
    position: absolute; /* Stay in place */
    left: 0;
    top: 0;
    background-color: #000; /* Black w/opacity */
    overflow-x: hidden; /* Disable horizontal scroll */
  }
  .reward .card {
      border: 1px solid !important;
      border-radius: 0 !important;
      overflow: hidden;
      cursor: pointer;
      transition: all .25s ease-in-out;
  }
    .reward .card:hover {
            transform: scale(1.22);
    -webkit-transform: scale(1.22);
    z-index: 2;
    }
  .reward .card img {
  margin-top: -2px;
  }
    .reward .card.silver {
        border-color: #BCBEC0 !important;
    }
    .reward .card.gold {
        border-color: #E5B64E !important;
            /*transform: scale(1.22);
            z-index: 1;*/
    }
    .reward .card.bronze {
      border-color: #D37B40 !important;
    }
    .reward .card.platinum {
      border-color: #096DD9 !important;
    }
    .card .display-1 {
        font-size: 3.5rem;
        color: #096DD9;
    }
    .cursor-pointer {
        cursor: pointer;
    }
    
@media (max-width: 576px) { 
    .reward .card {
        margin-bottom: 2rem !important;
    }
    section  {
        margin: 3rem 0;
    }
    .detail-wrap .detail-content {
      margin-bottom: 3rem;
    }
 }


</style>
