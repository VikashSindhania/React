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
