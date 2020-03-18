let db = {
  users: [
    {
      userId: "dh23ggj5h3op2irenfdpsaou230",
      email: "user@gmail.com",
      handle: "user",
      createdAt: "2020-03-09T18:19:29.128Z",
      imageUrl: "image/dflakjaldskadlk/sdjldjals",
      bio: "Hello, my name is user, nice to meet you",
      website: "https://user.com",
      location: "Pune, India"
    }
  ],
  posts: [
    {
      userHandle: "user01",
      body: "This is a sample Post",
      createdAt: "2020-03-09T18:19:29.128Z",
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: "user",
      postId: "dbjsfgdksuufhgkdsufky",
      body: "nice one mate!",
      createdAt: "2020-03-09T18:19:29.128Z"
    }
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      postId: "kdjsfgdksuufhgkdsufky",
      type: "like | comment",
      createdAt: "2020-03-10T18:09:23.820Z"
    }
  ]
};

const userDetails = {
  // Redux data
  credentials: {
    userId: "N4LAKSJ3I2OKJRF0941OJEWDFHTDS",
    email: "user@gmail.com",
    handle: "user",
    createdAt: "2020-03-09T18:19:29.128Z",
    imageUrl: "image/dflakjaldskadlk/sdjldjals",
    bio: "Hello, my name is user, nice to meet you",
    website: "https://user.com",
    location: "Pune, India"
  },
  likes: [
    {
      userHandle: "user",
      postId: "hh4019jkwew09jiifak1j"
    },
    {
      userHandle: "user",
      postId: "3I4139jksew09jiifak1j"
    }
  ]
};
