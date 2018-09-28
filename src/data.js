const data = {
  posts: [
    {id: 1, category: {id: 1, name: 'Sport'}, title: "Ut sit amet egestas nulla, sed efficitur nunc. Proin ullamcorper", body: "Quisque faucibus libero venenatis mauris finibus iaculis. Vivamus eget ultricies ante, cursus commodo arcu. Cras fringilla sed massa pulvinar pretium. Quisque tempus neque id congue venenatis. Proin vel lobortis turpis."},
    {id: 2, category: {id: 1, name: 'Health'}, title: "Ut sit amet egestas nulla, sed efficitur nunc. Proin ullamcorper", body: "Quisque faucibus libero venenatis mauris finibus iaculis. Vivamus eget ultricies ante, cursus commodo arcu. Cras fringilla sed massa pulvinar pretium. Quisque tempus neque id congue venenatis. Proin vel lobortis turpis."},
    {id: 3, category: {id: 1, name: 'Entertainment'}, title: "Ut sit amet egestas nulla, sed efficitur nunc. Proin ullamcorper", body: "Quisque faucibus libero venenatis mauris finibus iaculis. Vivamus eget ultricies ante, cursus commodo arcu. Cras fringilla sed massa pulvinar pretium. Quisque tempus neque id congue venenatis. Proin vel lobortis turpis."},
    {id: 4, category: {id: 1, name: 'Politics'}, title: "Ut sit amet egestas nulla, sed efficitur nunc. Proin ullamcorper", body: "Quisque faucibus libero venenatis mauris finibus iaculis. Vivamus eget ultricies ante, cursus commodo arcu. Cras fringilla sed massa pulvinar pretium. Quisque tempus neque id congue venenatis. Proin vel lobortis turpis."},
    {id: 5, category: {id: 1, name: 'Sport'}, title: "Ut sit amet egestas nulla, sed efficitur nunc. Proin ullamcorper", body: "Quisque faucibus libero venenatis mauris finibus iaculis. Vivamus eget ultricies ante, cursus commodo arcu. Cras fringilla sed massa pulvinar pretium. Quisque tempus neque id congue venenatis. Proin vel lobortis turpis."},
  ],
  faq: {
    journalist: [
      {
        question: 'What is Bloverse?',
        answer: 'Bloverse is a unique social media platform, creating a community of people who are rewarded for contributing content to help drive discussions and engagement.<br> <br>Bloverse is a content rich platform, whose community dictates what is produced by viewership  and feeding more content by discussions on viewed content – allowing for an organic evolution of content over time.',
      },
      {
        question: 'What does Bloverse has to offer?',
        answer: 'We deliver quality real time  news relevant to your environment and not  just people’s opinion.<br> <br>Bloverse is a new and exciting revenue share model that creates a sense of ownership, to redistribute wealth and allow our community to earn through engagement with content',
      },
      {
        question: 'Can I share my content/article with contacts on my personal social media accounts?',
        answer: 'Yes, you can share your article with the rest of the world through Facebook, Linkedin, Twitter and Instagram',
      },
      {
        question: 'How can I share my articles on Facebook/ Instagram/ Twitter?',
        answer: 'To share your articles/post on social media, go to the end of the post and click on the share to Twitter, Instagram, Linkedin or Facebook icons. You will be prompted to connect your social media account if you haven’t done that already',
      },
      {
        question: 'I have trouble logging in my Bloverse account, what do I do?',
        answer: 'There are several reasons why you may be having trouble logging into Bloverse. Below are the most common login issues members experience.',
      },
      {
        question: 'Can I share my post more than once?',
        answer: 'Yes, you can share your posts more than once on your social media handles. But your post can only be published once on Bloverse',
      },
      {
        question: 'I forgot my credentials, how do I retrieve?',
        // 
        answer: `There are several reasons why you may be having trouble logging into Bloverse. Below are the most common login issues members experience. <br> 
                     <ul>
                        <li><b>The  login information was incorrect. Please try again.</b><br><br>
                        Try the steps below to resolve this issue: 
                              <ul> 
                                  <li> Make sure caps lock is off (passwords are case sensitive) and you are not inadvertently adding a black space before or after your password.</li>
                                  <li> Reset your password using our Password Reset form. (Be sure to use the email address tied to your Bloverse account.) If you do not receive the password reset email, check your spam folder. If it's not there, please send an email support@bloverse.com  and we can reset your password for you.</li>
                              </ul>
                              </ul>
                              </ul>
                            </li><br>
                        <li><b> Sorry, we couldn’t create a new account using this information. If you already have an account, please log in.</b><br>If you are receiving this error,
                              it means you are using the account creation page rather than the login page. Make sure you are logging in on the Bloverse.com login page.</li><br>
                              <li><b>I’m being logged into someone else’s account </b>
                               <br>
                              This happens if you’re sharing your computer with someone else. If the person who used Bloverse prior to you did not log out of their account,you will be brought to their account when you go to bloverse.com.<br> 
                              <br>To log out of an account, click on the name in the top-right hand corner and select Logout.</li>
                     </ul>`
      },
      {
        question: 'Am I restricted to  a category?',
        answer: 'No, you are not restricted to the category you initially chose.<br>You can choose a category when you are registering and you also can choose categories for every post you write',
      },
      {
        question: 'Can I add an audio/video content with my post?',
        answer: 'Currently, you can’t add an audio or video content with your post. This is a future feature to be added to the platform.',
      },
      {
        question: 'I can’t upload an file/Image?',
        answer: 'To upload an image/file, go to your <u><b>dashboard</b></u>, click Create Post, Enter your Post Title, enter your Post Content, then Click on upload image<br><br>But, if you have issues uploading your image, try the following;',
      },
      {
        question: 'Clear Your Cache:',
        answer: "Clearing your browser cache is often a great fix for annoying little problems that come up.  You need to clear the cache, close the browser, reopen the browser and then log back into your account.  If you're not sure how to clear your cache, see: http://www.refreshyourcache.com/",
      },
      {
        question: 'Try a Different Browser:',
        answer: "Our service usually works perfectly on all browsers.  But if clearing the cache doesn't help out, switching to any other browser than the one you're currently using may be the way to go.",
      },
      {
        question: 'What is maximum image size that can be uploaded?',
        answer: 'You are not restricted to a particular size of image upload',
      },
      {
        question: 'How can I find my own posts and topics?',
        answer: 'On the dashboard, click on your post. It gives you an information about all your posts',
      },
      {
        question: 'How Can I Get More Views For My Posts?',
        answer: 'Write about trending entity, share on your social media platforms. The more Content you write and share on, the more views you’ll get.',
      },
      {
        question: 'How do I earn on Bloverse?',
        answer: 'To start earning as a content provider, sign up as a writer. You can go through our Ranking system for content providers here to learn about how to earn on Bloverse',
      },
      {
        question: 'How do I get paid?',
        answer: 'You’ll be paid on a weekly or monthly basis based on points. For more information on how you get paid click Payment Page.<br> <br>Your Payment Page displays your current reward, reward that has been paid, when you will be paid. It allows you to input your details to be paid and many more things about payment<br> <br>We are in collaboration with some payment providers such as Payoneer etc',
      },
    ],

    commenter: [
      {
        question: 'What is Bloverse?',
        answer: 'Bloverse is a unique social media platform, creating a community of people who are rewarded for contributing content to help drive discussions and engagement.<br> <br>Bloverse is a content rich platform, whose community dictates what is produced by viewership  and feeding more content by discussions on viewed content – allowing for an organic evolution of content over time.',
      },
      {
        question: 'What does Bloverse has to offer?',
        answer: 'We deliver quality real time  news relevant to your environment and not  just people’s opinion.<br> <br>Bloverse is a new and exciting revenue share model that creates a sense of ownership, to redistribute wealth and allow our community to earn through engagement with content',
      },
      {
        question: 'How do I join the conversations on a post/topic?',
        answer: 'Before you can start posting comments, you need to create an account with, verify your email address and create a display name, which will appear with any comment you write.',
      },
      {
        question: 'If I comment on a post/article, what name will appear?',
        answer: 'When you create your account, you will have the option to add a display name, which is required to join a conversation. Readers can also upload profile photos as a unique signature and identity to their comments.<br> <br>If you use Linkedin or other accounts to log into Bloverse, the display name will default to the name provided with that account. You can change this by going to your profile/dashboard',
      },
      {
        question: "My comments aren't posting",
        answer: 'Sometimes, comments take a minute or two to show up on a thread, so please be patient in the immediate window following your posting',
      },
      {
        question: 'I posted a comment on a thread and it was removed. Why?',
        answer: 'First, take a moment to review the House_rules_for_commenters. Most comments are removed from discussions on The Post because the posts attack or insult other readers rather than discuss the issues at hand. Name-calling, cursing and dismissive behavior will be deleted.',
      },
      {
        question: 'When does The Post turn off comments on an article?',
        answer: 'We will lock an ongoing discussion on an article if comments submitted continue to go against the community rules. In these cases, readers can see what has been submitted but will no longer be able to submit new posts.',
      },
      {
        question: 'How do I get updates on specific categories?',
        answer: 'Bloverse allows you select/choose your interest of category. Once you select a particular category, published articles in that category will show up on your homepage and in your email digests.<br><br> If you believe there’s an article where we should turn off the comments, please email comments@bloverse.com',
      },
      {
        question: 'I still have more questions. Where can I send them?',
        answer: 'If you have additional questions or would like some clarity about any of the items listed above, you can send an email to comments@bloverse.com',
      },
    ],
  },
  rules: {
    journalist: [
      'You  are legally responsible for what you post. Do not write anything which is harmful and often untrue.',
      "Bloverse is a platform for free expression. But we don't support content that promotes, threaten, incite or condones violence against individuals or groups based on race or ethnic origin, religion, disability, gender, age, nationality, veteran status, or sexual orientation/gender identity, or whose primary purpose is inciting hatred on the basis of these core characteristics.",
      'Do not post content in a deceptive way.',
      "Please do not mislead or confuse readers by pretending to be someone else or pretending to represent an organization when you don't. We're not saying you can't publish parody or satire - just avoid content that is likely to mislead readers about your true identity.",
      'Do not use someone else’s copyrighted work or trademark unless you’re authorized to do so',
      'Your content should not exist with the predominant purpose of driving traffic to an external website, business, or product. All included content must be relevant, substantial and informative.',
      'We do not allow pornographic images or videos that contain nudity or sexual activity.',
      'We do not allow content that exploits children e.g Child sexual abuse imagery. We will report such user to the law enforcement.',
      'Do not encourage others to commit specific acts of violence with your post',
      'Do not post content that violates others’ privacy, including personally identifying or confidential information such as credit card numbers, social security numbers, non-public phone numbers, physical addresses, email addresses, or other non-public information.',
    ],
    commenter: [
      'Do not reveal contact details such as phone numbers, postal or e-mail addresses, or any details that can personally identify you or someone else',
      'Please treat other users with respect. You are welcome to express strong opinions, but do not abuse or insult other guests',
      'If you feel provoked by what you consider to be a personal comment, please try not to respond and contact the moderators who will deal with this situation as soon as possible.',
      'You are not permitted to use our site to advertise any comments or services. Spam will be removed as soon as it is reported.',
      'Avoid excessively negative, sweeping or unbalanced comments.',
      'Do not incite hatred on the basis of race, religion, gender, nationality, sexuality or any other personal characteristic',
      'Keep to the topic being discussed.',
      'Don’t link to sites or images containing pornography, gross violence, or any content likely to cause offence in any way.',
      'Comments which are not in English are not allowed. This is because we have to ensure comments can be checked and to ensure that all readers understand the comment.',
    ],
  },
  ranking:{
    journalist:[
      {
        question: 'Comments',
        answer: 'For every interaction (in comment) that your post/article receives, you get a reward of 5 points per comment',
      },
      {
        question: 'Views',
        answer: 'You get a reward 1 point for every view your article has',
      },
      {
        question: 'Likes',
        answer: 'For every like that your article/post attracts, you get a reward of  25 points per like',
      },
      {
        question: 'Share content',
        answer: 'You can also get a reward for every of your posts that is being shared on other social media platforms. You get a reward of 10 points per share',
      },
      {
        question: 'Invitations to BV',
        answer: 'For every successful introduction you make for Bloverse, you get a reward of  1000 points. A successful introduction is measured by every invite we have on the platform through your links',
      },
    ],
    commenter:[
      {
        question: 'Comment on an article',
        answer: 'For every comment you make on an article /post, such comment must get at least 5 likes to qualify. You get a reward of 50 points for each comment that gain the interest/likes of people',
      },
      {
        question: 'Article read',
        answer: 'For every article you read, you get  a reward of 100 points. You also get an additional reward when you like someone else’s comments. You get an additional 5 points for every like you/interaction you make with someone else’s comment.  ( You can only have a maximum of 20 interactions ',
      },
      {
        question: 'Article shared to your social media',
        answer: 'For every content/article you share on your social media platforms, you get a reward of  50 points. You also get an extra 100 points for sharing content that has your comment on it.',
      },
      {
        question: 'Interact with someone else’s comment',
        answer: 'For every interaction you make with other people’s comment, you get points between 5 to a maximum of 20 a day Likewise, when you append an emoji to describe your feeling with comment, you get an extra of 50 points',
      },
      {
        question: 'How can I find my own posts and topics?',
        answer: 'On the dashboard, click on your post. It gives you an information about all your posts',
      },
    ]
  }
}

export default data;
