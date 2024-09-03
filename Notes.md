1. package.json is also known as dependency injection.

2.package.json is an confoguration for an npm

3. Bundler: use to bundle a bulk of files so before launching in production it makes our apllication fast & optimize it always. for ex: 4.parcel,veet, webpack

   4.We use Parcel: Parcel will ignite our app, give strength, give muscles to our React.

4. There are two types of dependencies. one is Normal dependencies and others one is dev dependencies.

5. Dev dependencies = it is generally require in our development environment

6. Normal dependencies = Require in our production environment

7. "parcel": "^2.12.0" ^ = karat; ~ = tilde;

8. ^ = karat; it will automatically updates its minor version when it's new update is available;

9. ~ = tilde; it will automatically updates its major version when it's new update is available;

10. package-lock.json --> keep a track or lock of every exact version package of that dependencies.Keeps a Exact version;

11. package.json --> keeps a track of approxiate version of packages. its like configuration for our npm

12. "integrity": "sha512-W+gxAq7aQ9dJIg/XLKGcRT0cvnStFAQHPaI0pvD0U2l6IVLueUAm3nwN7lkY62zZNmlvNx6jNtE4wlbS+CyqSg==", keeps a hash Key to check whatever it is in the development machine is same as in production machine .

13. node_modules --> it contains the actual data of each dependencies. its like database of an each dependency code . there is a meme like Heaviest Objects In The Universe

14.Transitive Dependencies --> parcel dependended on other dependencies & other dependencies depended on other dependencies ....... and this goes like that , that is why we just installed "parcel" package but node_modules contain many file. This is Reason of node_modules having so much files present in it.
Like a Dependency Tree.

15..gitignore --> which we can regenerate push it to the .gitignore files. This is a good Practice.The folder or file which is present inside our these files that will bot be pushed to the github.

16.npx parcel index.html --> igniting our app. Create a Server for Us

17.npx --> execute a package.

18.npm --> install a package.

19.npm install react --> i need react as normal dependencies;

20. npm install react-dom.

21.type="module" --> it is not a normal Javascript . it is a type of module where we have to notify the browser if it is not containing any properties related to it. so this how we define when external properties are have to incorporate;

<script type="module" src="App.js"></script>

22.npx parcel build index.html --> Remove main: "App.js" which is known as an entry point of our application if you get error when running "npx parcel index.html"

23."browserList" : ["last 2 versions", ]

24. npx --> executing
    parcel --> use this npm package
    index.html --> giving a source file.

    \*. npm run start or also give npm start but its not work for build.

25. Config Driven UI Latest Practice //show different data on different state for Ex -> Swiggy Card --> For System Design Engineer.
26. config Driven UI --> Data Driven UI // Red background color in Delhi, blue background color in kolkata, different color according to different states. Just for Example when asked in System Design Engineering Interview.

27. Industry Best Way of code Writing Practices is --> That Whatever Your Project code Should be put in "src" folder.

28. Never Keep Your Hard Data in Your Component Files. Make File Like utils.js,commom.js,config.js utils Means Which Will Used all across Our Apps.

29. **Two types of Export/Import** -->
30. ### Default Export/Import => export default Component; import components from path;
31. # Named Export/Import => import { Component } from path; Use When u have to export multiple things

32. # React Hooks
33. (Normal JS utility functions)
34. useState() = super Power state variable.

35. A hook is a javascript function . React will keep your UI sync with Your data layer . UI directlyProportionaTo dataLayer. **Mechanism --> As Soon as the Data Change React will rerender my component**

# React Uses Reconcillation Algorithm, Its also Known as React Fiber. React is doing Efficient DOM Manipulaion how because it is using Virtual DOM . it has Diff algorithm (object Representation in html tag like div,h1, etc..)

36.UseState is used to create State Variables.

37. hook is at last a normal javascript function. it has its own useCases.
    one is callBack function which takes as an argument & other one is the dependencies Array. useEffect(() => {},[])

38. Shimmer UI is best for u to used in case of "Loading..."

39. The people who codes slow does not need to debug their code or have to debug then it have to spend very less time.People who fast code have to debug their code a lot. by Namaste React Akshay Saini Said.

40. # reactRouterDom --> npm i react-router-dom

    **whenever we have to do routes we have to use Routing Configuration by importing like this import { createBrowserRouter } from "react-router-dom";**

41. Two types of routing in Web Apps
    -client Side Routing --> When I load the app for the first time it already has the component code. I don't need to call the network and then fetching data and rendering in html. For Ex- contactUs Page
    -server Side Routing --> When we are making any Network calls and then fetching data.

42. when I am loading a class based component on our Webpage thats means i am creating a instace of that class .
43. when I am loading a functional based component on our Webpage thats means you are mountinting ,calling,invoking,loading etc that function or Functional based component.
44. React wants to Quickly render the component then make an API call to Quickly fill the data or render the data.

45. \*_In class Based Component Reacts Quickly render the component structure (for ex - constructor then render method rendered) and then make an API call using componentDidMount method._

46. story till Mounting Phase --> History till ComponentDidMount{
47. entered in the class based component
48. then constructor called
49. then render called
50. DOM Updated with its defined JSX Element
51. ComponentDidMount called ---- till here mounting phase completed.
52. }

# class Based Component [

53. # MOUNTING {

# Constructor(dummy)

# Render (dummy)

# <HTML Dummy>

# Component Did Mount

# <API call>

# <this.setState> --> state variable is updated

54. # }

55. # UPDATING {
56. # render(API data)
57. <HTML (new API Data)>
    # componentDidUpdate is Called

# }

# Unmounting{

# componentWillUnmount

# }

# ]

useEffect(() => {API call,[]}) run once after render
useEffect(() => {API call}) run at Every Render
useEffect(() => {API call,[count]}) called everytime when count changes.because now useSffect depend on the "count" state variable.
[] --> React Developer said there will be multiple state variables instead of defining like this copmponentDidUpdate(prevProps,prevState){
if(this.state.count !== prevState.count || this.state.count !== prevState.count2)
}

# componentDidUpdate is called after Every Update in class Based Component.

# componentWillUnmount ---> remember as it is used for clean up. it is called when we are leaving the page.Its a SinglePage(SPA). We are just changing the component in the UI

58. Issue come up with SPA
59. componentDidMount(){
60. this.interval = setInterval(() => {
61. console.log("NAMASTE ")
62. },1000)
63. }
64. so to clean it up instead of increasing its rendering it multiple times and times come when browser start hanging so to avoid this we define the function in componentWillUnmount()
    componentWillUnmount(){
    clearInterval(this.interval);
    console.log("ComponentWillUnmount)
    }

65. useEffect(() => {
    setInterval(() => {
    console.log("Namastei React Op")
    },1000)
    },[])

66. need to clean up if case come in functional component -->
67. this how you will unmount it... //Unmounting Phase
    useEffect(() => {
    const interval = setInterval(() => {
    console.log("API call")
    },1000)
    return () => {
    clearInterval(interval)
    console.log("useEffect Return")
    }
    },[])
    console.log("Render")

68. A hook at last is a utility a Normal Javascript function. its also knowns as helper function just as fetching Data.
69. custom hook that will make your code modular,readable,reusable
70. hook is at the end is a utility function.
71. useParams is a hook, Always try to create it in a util folder
    72.Good convention to follow . always create a seperate file for a seperate hook.I will name the same file that is similar to hook functionality.Always start with the "use" that means its a hook . React understand that.

72. Hook has its own state ,own sideeffects and make the code more durable & Readable.

73. chunking
74. Code Splitting
75. Dynamic Loading
76. Lazy loading
77. You have to do dymamic bundling in for smaller chunks.
78. We are dividing into like this so that bundler perform better. it can chunked in different bundles so that the Application don't get loaded too and it should run smoothly. How we achieve this ?
79. We achieve the above mechanism to work by using the concept of Lazy loading. This lazy loading will reduce the load on the App and make its faster by defining different component have different js file in its bundler.

80. Style.css -->
81. we use PreStyled Component in this by Integrating different library of css like Tailwind, Material-UI ,BootStrap ,chakra Ui,s tyled-components,Ant-Design etc instead of writing core css for each of them.
82. PostCSS - a tool for transforming CSS with JavaScript.
83. npx means invoking .npx tailwindcss init --> We are executing tailwindcss in our project.
84. {
    "plugins": {
    "tailwindcss": {}
    }
    }
    The above configuration is of "postcssrc file" where it is saying That we are using "Tailwind" in our project and please "Parcel" understand this .

85. HigherOrderComponents is a function that takes the component enhances the component and returns back a new component.
86. In React Data flow from one way direction. That means parent send data to their child and then that child send their data to their child. just goes like this.means "chaining Operation , linkage operation without skipping"This is how we say it is a PROPSDRILLING concept. I am drilling the props from Top to bottom of the leaf.
87. In React Component has their own state and props. without it React is nothing.

88. React gave the super power known as React Context . which avoid propDrilling. context is like a place where all your global data is present and that data can be used by another component in its whole application.Top to the 10 leaf components you can easily pass the data avioiding propdrilling concept.This data can we access at anythere in the app. Context here means Central store . context solves the problems of props drilling.

89. Now going through the concept of React Context . then points come which data have to be saved. so maximum of the component or page which needed to show in every page that data need to be stored. Ex- User Name showing in Every WebPage, DarkMode,LightMode.
90.
91. useContext act as like a Global Object.

92. We can't useContext hook in a a class based component because it is hook which is defined for functional component. This is how we can access in class components . 93. import UserContext from "../../../../path"; not like this import {UserContext} from "../../../../path". file name cannot be placed in {curly braces }.
93. {hooks} can be placed in curly braces during importation in any component,
94. div>
    LoggedIn User
    <UserContext.Consumer> // This is an component
    {(data) => console.log(data)} // Its a call back function which gets data inside it. who passes the data? Racat takes care of it.
    </UserContext.Consumer>
    </div>

95. return (
    <>
    <UserContext.Provider value={{ loggedInUser: userName }}> // Wrapping all the components inside the UserContext.provider . so the data which is provided as the value can be transfered to all Wrapped components
    <Header />
    {/_ Routes component will be replaced by this outlet _/}  
     <Outlet />
    </UserContext.Provider>
    </>
    );

    96. <UserContext.provider/> if i can provide my provider to a specific portion or to a specific component we can do. "context" is a global space where we provide our data to whole applications or at least some of the specific portion of the App. For Example if we want to transfer the data to a <Header/> component only then we can wrap it provider like this.

96. <userContext.Provider value={{ loggedInUser: userName }} >
97. <Header />
    </UserContext.Provider>
    <Outlet />
    </>
    );

    <>
    <UserContext.Provider value={{ loggedInUser: userName }}>
    {/_ {Vikash Kumar} _/}
    {/_ // This is how we transferred the data to all the components.With help of "Provider" _/}

        <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
          {/* {Elon Musk}   */}
          <Header />
        </UserContext.Provider>
        {/* Routes component will be replaced by this outlet */}
        <Outlet />

    </UserContext.Provider>
    </>

98. Redux
99. Redux offers state management. Redux is different Library.
100.  We use the React-Redux library
101.  Redux-toolKit reduce the complexity of React-Redux.
102.  In our product we are using Redux Toolkit.
103.  Redux store is big javascript object and itt is kept in global central place.is it good to keep all the data inside the big object of the Application.
104.  with lot of slices present in the Redux store we can reduce the complexity of Redux.
105.  so the parts of the Redux store are divided into number of slices and that part of slices represent the redux store.
106.  we can keep the information like user logged, theme mode, cart slice etc.
107.  IT's work like that when you click on "ADD To CART" then it initate or call the dispatch action and then one function is called which is responsible for to modified the value of the cart. and that function is known as reducer function.
108.  "Add To Cart " clicked --> "It dispatches an Action Which calls" --> "Reducer function" --> "Which updates the slice of our Redux store"
109.  After this a new concept come "Selector" . The selector will give you the data to show the incresing value of cart in your UI ."Selector" also means here "subscribing to the store".It is in sync with the store.
110.  "SETUP" --> "
111.  - Install @reduxjs/toolkit and react-redux
112.  - Build our store
113.  -Connect our store to our App
114.  -dispatch
115.  -slice
116.  -selector
117.  Each slice have its own reducer function
118.

119.  onClick={handleAddItem}: Directly assigns the function as an event handler. Executes when clicked.
      onClick={() => handleAddItem()}: Wraps the function in an arrow function. Useful for adding logic or passing parameters.
      onClick={handleAddItem(item)}: Immediately invokes the function during render. Not suitable for event handling.

120.  TESTING (Types of Testing) A developer can do...
121.  --Unit Testing
122.  -Integration Testing
123.  -End To End Testing

124.  Unit Testing...
125.  Integration
126.  End - End Testing ---> cypress, pupeteer and uses lot of tools
127.
128.  - Unit Testing --> You are testing for small portion of your App, Ex-like some line of code , code in one component.Testing one component in isolation.
129.  -Integration Testing --> Testing the Integration of the component. Ex - On searching. Where multiple components are involved.
130.  -End to End testing -e2e testing --> As soon as the user landing on the page and doing all operating and at end leaving the page.
131.

132.  -->React Testing Library<--
133.  When we do npx-create-react-app then their React Testing Library is already installed or integrated but in parcel we need to integrate it & have to de setup
134.  . Behind the scene React Testing Library is using JEST Library
      You need to do npm i -D jest
      npm install --save-dev babel-jest @babel/core @babel/preset-env
      npm i -D @testing-library/react
      Install babel dependencies & set up the babel.config.js file & configure it.

135.  Setting up Testing in our App
136.  - Install React Testing Library
137.  - Installed jest
138.  - Installed Babel dependencies
139.  -Configure Babel
140.  - Configure Parcel Config file to disable default babel transpilation.
141.

142.  npx jest --init

- It Will ask Some Question after givind command npx jest --init
- then follow this jsdom (browser-like)
