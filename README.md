##  Infinite Scroll 
This React application demonstrates an Infinite Scroll feature that fetches data dynamically as users scroll to the bottom of the page.

### Features
- Dynamically loads data using Axios.
- Displays a loading indicator during data fetching.
- Connects to an API for incremental data loading.
  
### Installation

1. Clone the repository:

```
https://github.com/phattharaphorn/infinite-scroll.git  
```

2. Install dependencies:

```
npm install
```

3. Run the app:

```
npm start
```

4. Open the browser at http://localhost:3000.
  
### API Used
Data is fetched from:

JSONPlaceholder Posts API
```
https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10
```
