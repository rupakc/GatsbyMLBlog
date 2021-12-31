module.exports = {
  aboutText : `Having been in the midst of Machine learning even before the <b> Deep Learning </b> era,
  has enabled me to get a long-view of how things stand today and where it may lead to.
  I don't believe Deep Learning is a silver bullet, it is like any other paradigm, comes with its own set
  of strengths and weaknesses. Though quite useful in selected multi-modal domains, its potential applications are throttled by the data bottleneck.
  In most practical ML applications all you need is a <b> swiss army knife </b> and not a <b> hammer </b>. <br/>
  I am not afraid to call a spade a spade. Hence, this blog is an attempt to give a glimpse of Machine Learning from the first principles.
  The blog is organized in an easy to follow structure with a focus on the basics first and then slowly transitioning to more advanced topics.`,

  introductionText: `Machine Learning is a sub-field of <b> A.I.(Aritificial Intelligence) </b>. It stands on the sturdy and able shoulders of
  several mathematical paradigms like <b><i> Inferential Statistics, Probability, Convex Optimization and Multivariate Calculus </i></b> among others.
  In simple words it uses data to teach computers the art of making predictions. The data used for teaching the machines is popularly known as
  <b> training data </b> (no points here for guessing) and the efficacy of the trained model is tested on the unseen data. <br/>
  Mathematical models form the crux of these Machine Learning algorithms. These are the workhorse of all the optimizations and approximations
  which drive almost all popular and useful algorithms today. The various flavours of Machine Learning can be broadly categorized as - `,

  typesOfML: ["<b> Supervised Learning </b> - Classification & Regression are popular approaches to this, where the learning agent is provided a set of labeled examples to learn from.",
  "<b> Unsupervised Learning </b> - Clustering is the de-facto approach to unsupervised learning. The data is devoid of any labeled classes hence, algorithms aim to detect hidden patterns in the data.",
  "<b> Semi-Supervised Learning </b> - Combines the best of both worlds (i.e. Supervised and Unsupervised). <b> Label Propagation </b> is its flag-bearer.",
  "<b> Active Learning </b> - Basically a clever way to select most informative exemplars from the dataset to train on.",
  "<b> Reinforcement Learning </b> - The closest paradigm to learning in the real-world where the learning agent is given scores for its actions in a given learning environment.",
  "<b> One Shot/Zero Shot/Few Shot Learning </b> - The agent is taught to generalize from a set of very few labelled examples which strongly correlate to the end task.",
  "<b> Transfer Learning </b> - Transfer the knowledge of one domain to another, the learning tasks have to be closely related for this to work effectively.",
  "<b> Self Supervised Learning </b> - This provides an ingenious way to modify the input space in order to learn non-trivial relations and structures inherent in the input space.",
  "<b> Multi-task Learning </b> - Learning several complementary, closely related tasks together so that they can all benefit each other.",
  "<b> Knowledge Distillation </b> - Rose out of the needs to compress the knowledge of gargantuan models (several million parameters) to a couple of thousand parameters. This follows the <b> student-teacher network </b> paradigm.",
  "<b> Deep Learning </b> - Supervised Learning based on Neural Networks, using the ubiquitous backpropagation algorithm and its many variants.",
  "<b> Lifelong Learning </b> - As the name suggests these class of algorithms continually and incrementally adjust their parameters and keep in learning, there is no demarcated training and testing phase."],

  basicText: `Machine Learning can be boiled down to its three main pillars as enshrined by <b> Pedro Domingoes </b>. These are - <b> Representation </b>, <b> Evaluation </b> and <b> Optimization </b>.
  Representation is the first and all important part, this involves how to decompose the problem at hand into a set of actionable feature sets which encode the domain knowledge. Next comes Evaluation,
  this measures the efficacy of the trained model usually done on a held out dataset (test data). Each approach (classfication, regression, clustering etc.) has its own set of evaluation metrics and
  chosing the right metric makes life a lot easier. <br/>
  Optimization is where the magic happens, this finetunes the parameters of the model according to the data and evaluation function provided. There are many variants of this which are mostly used -
  <b> Maximum Likelihood Estimation, Expectation Maximization, Gradient Descent </b> etc.` ,

  advancedText: `There are hundreds of different algorithms in Machine Learning and new ones are being introduced every day. However, all of these have a grounding or are somehow based on a set of core and most widely used algorithms.
  These set of algorithms is the bare minimum any practioner should know. They span all the three important realms of Machine Learning - Classification, Clustering and Regression. Reinforcement Learning algorithms have been left out
  because they involve a whole different ball game. So has been other popular approaches like Genetic algorithms and Probabilistic Graphical Models. <br/>
  With the exception of <b> Logistic Regression </b> all the algorithms which one is bound to use on a daily basis have been mentioned here.`,

  basicCardJsonList:[
    {
      heading: "Train/Test/Validation Split" ,
      description: `The data is often divided into two or sometimes three mutually exclusive and exhaustive parts.
      One part of the data (training data) is used to tune the parameters of the model. The other parts validation and test
      are used to fine-tune its hyperparameters and gauge its efficacy.`
    },
    {
      heading: "Feature Engineering" ,
      description: `Features form the essence of all machine learning algorithms. In fact your model is as good as the features you feed it.
      The most important part of any ML formulation is to identify, transform or detect features which are most representative and useful of the problem at hand.`
    },
    {
      heading: "Bias-Variance TradeOff" ,
      description: `An ideal machine learning model has to learn to perform well on both its training data (bias) as well as generalize (variance) to unseen data beyond the
      training set. However, these two goals lie at opposite ends and optimizing for one diminishes the other. A sweet spot has to be reached in this trade-off.`
    },
    {
      heading: "Overfitting" ,
      description: `When the model picks up not only the pattern but also the noise in the training dataset, it is said to have overfit the data. This is also evident from the low generalization
      capacity of the model. An overfitted model has low bias and high variance. There are many ways to remedy this regularization being the most prominent one.`
    },
    {
      heading: "Underfitting" ,
      description: `The opposite problem of overfitting when the model is unable to learn the intricacies of the training data, as a result both the training error and generalization error are high.
      High Bias and Low variance are the hallmarks of this malaise. Increasing the model parameters and tweaking the training data usually help to mitigate this.`
    },
    {
      heading: "Regularization" ,
      description: `This mitigates the risk of overfitting, by pruning down the model parameters. The exact details are specific to individual algorithms but as a general trend this aims to make the models
      leaner by either reducing the number of effective parameters, or change the nature of the input which is being fed to the given algorithm.`
    },
    {
      heading: "Cross Validation" ,
      description: `It is used when training data is scare. In K-fold cross validation, the dataset is split up into K mutually exclusive and exhaustive parts and the training testing cycles run for K iterations.
      In each iteration one of the subsets is used to testing and the other K-1 are used for training in this way each of the K-parts is trained and tested upon.`
    },
    {
      heading: "Hyperparameter Optimization" ,
      description: `The dark arts of Machine Learning, optimizing these hyperparameters will hopefully give you the added performance. Hyperamaters are specific to the learning algorithm used. There are two
      popular ways of doing this exhaustive Grid Search or randomized Grid Search. Automatic hyperparameter optimization is an upcoming field in ML.`
    },
    {
      heading: "Concept Drift" ,
      description: `When the data used for testing or in production environments is quite different (in terms of distribution) to the training data, the performance of the model significantly degrades.
      Concept Drift is natural phenomenon and it plagues almost all ML models in production. The ways to counter this drift include detecting it first and then re-training the model.`
    }
  ],

  advancedCardJsonList: [
    {
      heading: "Naive Bayes",
      description: `The eponymous ML algorithm which every beginner sinks their teeth in, deceptively simple yet highly effective and flexible in its formulation. It is based on the bayes rule of probability. The posterior is
      calculated given the prior and the conditional probabilities. Theoretically, given enough data this has the lowest error rate (bayes error rate)`
    },
    {
      heading: "K Nearest Neighbors",
      description: `Like begets like, a lazy, online learning algorithm where the prediction is made only taking into account local neighbors in its input space, hence the name <b> K Nearest Neighbors </b>.
      The value of <b> K  </b> in K Nearest Neighbors is decided heuristically by trying different values, it is usually set to an odd value (in classfication).`
    },
    {
      heading: "K Means",
      description: `The primal clustering algorithm based on expectation maximization (lloyd's algorithm). Incrementally forms and updates a set of pre-defined <b> K </b> clusters. Apart from the value of K
      the initial cluster centroids are randomly chosen. There are several variations of this algorithm which aim to make this centroid selection process automatic (KMeans++).`
    },
    {
      heading: "Support Vector Machines",
      description: `Once hailed as the poster child of ML algorithms, it has strong theoretical foundations in quadratic programming, statistical learning theory and is used for everything starting from classification, regression
      to clustering and even anomaly detection. The <b> kernel-trick </b> gives it superpowers to handle high-dimensional data. `
    },
    {
      heading: "Random Forests",
      description: `Another algorithm from the classical age of machine learning which is still widely used. Based on decision trees, it uses information gain (or gini impurity) for building
      the tree in a top down fashion. It does automatic feature importance ranking and is used for classificaiton, clustering, regression as well as anomaly detection among others.`
    },
    {
      heading: "L1/L2 Regression",
      description: `Regularized variants of linear regression - Lasso (L1) and Ridge (L2) are used to prevent overfitting in the linear model and at the same time it enables automatic
      feature selection. In L1 the regularized feature params can be equal to zero, thereby ignoring the feature whereas in L2 they are close to but not equal to zero.`
    },
    {
      heading: "Neural Networks",
      description: `The life-blood of the present Deep Learning revolution. A learning architecture inspired by the functioning of the neurons in the human mind. Consists of layers
      of units (neurons) interconnected to each other and trained using the <b> backpropagation </b> algorithm. These have also been found to be universal function approximators.`
    },
    {
      heading: "Recurrent Neural Networks",
      description: `Turing Complete Machines with a time delay architecture and feedback loop in order to account for the sequential nature of temporal signals. These have been
      around since the early 90s however an effective training algorithm to overcome its limitation was only possible with the LSTMs and more recently GRU (Gated Recurrent Units) cells.`
    },
    {
      heading: "Convolutional Neural Networks",
      description: `What RNNs are to sequential data, CNNs are to spatial data. These are behind the superhuman level performance of NNs on the Imagenet dataset, reduces the parameters by
      introducting local connectivity and parameter sharing. They extract a set of hierarchical composable features using local filters at each level (i.e. layers of the network).`
    },
  ]
}
