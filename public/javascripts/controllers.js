app.controller('SubmissionController', function ($scope, $http) {
  $scope.submissions = [{title: "Lorem Ipsem", author: "Harry Potter", image: "http://careersinpsychology.org/wp-content/uploads/2012/08/colordo.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper finibus pellentesque. Aenean tincidunt tempus nisi ut vehicula. Sed pellentesque urna egestas, cursus metus non, malesuada velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vulputate turpis et luctus ultrices. Fusce consequat viverra elit, in facilisis nisi ullamcorper in. Integer vel eleifend est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed mattis tellus lorem, eu auctor ipsum aliquet commodo. Nulla facilisis vitae odio sed pretium. Nulla vehicula tincidunt condimentum. Aliquam mi diam, malesuada id leo a, vestibulum placerat lectus. Aliquam sed turpis tristique, tempus eros a, aliquam felis.", votes: 0, comments: [{ author: 'dog', text: 'that is cool man' }], show: false, add: false, date: 'Thurs Nov 05 2015 2:34:19 GMT-0700 (MST)'},
                        {title: "Other Post", author: "Bill Johnson", image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Horseshoe_Bend_TC_27-09-2012_15-34-14.jpg", description: "Morbi varius, lorem nec condimentum cursus, justo urna ornare metus, id sodales sem erat sed mauris. Sed tincidunt eget ante sed ultrices. Praesent rhoncus, augue quis viverra auctor, nibh mauris tincidunt quam, et fringilla massa lectus a metus. Nulla elit nisl, ullamcorper ut est sit amet, scelerisque ornare augue. Suspendisse enim velit, sollicitudin mollis commodo a, congue mollis ipsum. Donec consequat nibh in lobortis vulputate. Proin libero libero, accumsan nec nisl a, vehicula viverra arcu. Suspendisse fermentum odio id diam semper pellentesque. Vivamus quis mattis orci. Maecenas purus magna, finibus quis nisi a, pellentesque pharetra lacus.", votes: 4, comments: [], show: false, add: false, date: 'Sun Nov 08 2015 8:13:19 GMT-0700 (MST)'},
                        {title: "Awesome Post", author: "Joe Smith", image: "http://adventure.nationalgeographic.com/2009/10/adventure-towns/img/colorado-springs-450.jpg", description: "Nulla hendrerit tempor gravida. Pellentesque molestie et mi sed pellentesque. Cras pellentesque erat eget tempor pulvinar. Integer tincidunt condimentum ullamcorper. Nulla facilisi. Sed congue mauris et felis consequat faucibus. Cras est massa, vulputate placerat felis nec, tempor egestas purus. Aliquam euismod ac augue convallis blandit. Integer rhoncus porta eros ac pretium.", votes: -2, comments: [], show: false, add: false, date: 'Fri Nov 06 2015 16:01:19 GMT-0700 (MST)'}
                        ];
  $scope.form = false;
  $scope.selection = 'Votes';
  $scope.predicate = '-votes';
  $scope.submitted = false;
  $scope.submitComment = false;

  $scope.order = function(predicate) {
    if(predicate === '-votes') {
      $scope.selection = 'Votes';
    }
    if(predicate === 'date') {
      $scope.selection = 'Date';
    }
    if(predicate === 'title') {
      $scope.selection = 'Title';
    }
    $scope.predicate = predicate;
  }

  $scope.showForm = function() {
    $scope.form == true ? $scope.form = false : $scope.form = true;
  }

  $scope.createSubmission = function() {
    if($scope.postForm.$valid) {
      $scope.submissions.push({title: this.newSubmission.title,
                              author: this.newSubmission.author,
                              image: this.newSubmission.image,
                              description: this.newSubmission.description,
                              votes: 0,
                              comments: [],
                              date: new Date() });
      $scope.newSubmission = {};
      $scope.form = false;
      $scope.submitted = false;
    } else {
      $scope.submitted = true;
    }
  };

  $scope.upVote = function() {
    this.submission.votes++;
  };

  $scope.downVote = function() {
    this.submission.votes--;
  };

  $scope.createComment = function(id) {
    if(this.commentForm.$valid) {
      this.submission.comments.push(this.newComment);
      this.newComment = {};
      this.add = false;
      this.submitComment = false;
    } else {
      this.submitComment = true;
    }
  }

  $scope.reloadPage = function() {
    document.location.reload();
  }

});