<template>
    <main class="terms">
        <div class="terms-container">
            <h1>Terms And Conditions</h1>
            <p>LAST UPDATED 19 DECEMBER, 2018</p>
            <div class="terms-texts">
                <h1>Welcome to Bloverse!</h1>
                <p>Thanks for using our products and services. By using our Services, you are agreeing to these terms.
                    These ‘’Terms’’ are a contract between you and Bloverse. Please read them carefully;
                    <br/><br/>These Terms can be changed at any time. We would send you a notification each time there is an addition or change in these Terms.
                </p>
                <h5>Rights &amp; responsibilities on Content</h5>
                <p> You own the rights to the content you create and post on Bloverse.<br/><br/> You’re responsible for the 
                    content you post. This means you assume all risks related to it, including someone else’s claims 
                    relating to intellectual property or other legal rights.<br/><br/> You’re welcome to share your published 
                    content on Bloverse to other social platforms or accounts of yours. <br/><br/>By posting content to Bloverse, 
                    you have given us the license to use your content. We may also use your content to 
                    promote Bloverse. We will never sell your content to third parties without your explicit permission.                
                </p>
                <h5>Our content and services</h5>
                <p>Do not interfere with, or disrupt, the access of any user, host, or network, including sending a virus, 
                    overloading, flooding, spamming, mail-bombing the Services, or by scripting the creation of content or 
                    accounts in such a manner as to interfere with or create an undue burden on the Services. <br/><br/> Scraping the 
                    Services is totally prohibited, but Crawling the Services is allowed if done in accordance with the provisions 
                    of our robots.txt file
                </p>
                <h5>No children</h5>
                <p>Bloverse is only for people 13 years old and over. By using Bloverse, you affirm that you are over 13. If we learn someone 
                    under 13 is using Bloverse, we’ll terminate their account.
                </p>
                <h5>Incorporated rules and policies</h5>
                <p>By using the Services, you agree to let Bloverse collect and use information as detailed in our Privacy Policy. <br/><br/>To enable a 
                    functioning community, we have House Rules for commenters, House rules for content providers.<br/><br/> By using Bloverse, you agree to 
                    follow these Rules and Policies. If you don’t, we may remove your content, or suspend or delete your account.
                </p>
                <h5>Other Terms</h5>
                <p><b>Disclaimer of warranty <br/></b>No implied warranty of merchantability, fitness for a particular purpose, availability, security, title or non-infringement.
                     You use our services at your own risk and discretion. That means they don’t come with any warranty. <br/><br/><b>Responsibilities for comments <br/></b>Kindly note that 
                     any opinion or comment being share on your post isn’t of Bloverse but of commenters. <br/><br/><b>Entire agreement. <br/></b>These Terms (including any document 
                     incorporated by reference into them) are the whole agreement between Bloverse and you concerning the Services.
                </p>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    
}
</script>
terms-texts
<style scoped>
    .terms{
        background-color: #F5F5F5;
        display:flex;
        justify-content: center;
        align-items: center;
        font-family: Montserrat;
    }
    .terms-container{
        width:50%;
        margin-bottom:7rem;
    }
    .terms-container h1{
        font-weight:700;
        letter-spacing: 2px;
    }
    .terms-container > p{
        font-size:.6rem;
        color:#096DD9;
        font-weight:600;
        letter-spacing: 2px;
        padding:1rem 0 2rem 0;
    }
    .terms-texts{
        background-color: #fff; 
        padding:1rem 2.5rem 2rem 2.5rem;
    }
    .terms-texts h1{ 
        font-weight:700;
        padding-bottom:1rem;
        letter-spacing:2px;
        line-height: 2;
    }
    .terms-texts h5{ 
        font-weight:700;
        padding:1rem 0;
        letter-spacing:2px;
        line-height: 2;
    }
    .terms-texts p{ 
        line-height: 2;
    }
    @media screen and (max-width: 800px) {
    .terms-container{
        width:90%; 
    }  
    }
</style>
