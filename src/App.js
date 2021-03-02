// import Banner from './images/banner.jpg';

function App() {
  return (
    
    <section className="bg-gray-100 dark:bg-gray-800 text-gray-400 body-font h-screen flex flex-col justify-center">
      <div class="bg-white dark:bg-gray-700 px-1 w-full md:w-1/2 lg:my-32 lg:px-4 lg:w-1/3  overflow-hidden rounded-lg shadow-lg h-28 mx-auto">
         <input placeholder="Add items..." className="dark:bg-gray-600 w-11/12 border-primary-100 rounded content-center text-center m-8 ml-4 center shadow-md h-10 text-primary-100"  />  
    </div>

    <div class="bg-white dark:bg-gray-700 px-1 w-full md:w-1/2 lg:px-4 lg:w-1/3 overflow-hidden rounded-lg shadow-lg mx-auto -mt-24">
     <p className="mb-8 mt-4 text-center color-blue text-indigo-400 font-semibold">SHOPPING LIST</p>
          <ul > 
            <li className="dark:bg-gray-600 w-11/12 border-primary-100 rounded text-center p-2 ml-4 mb-4 mt-4 center shadow-md h-10 text-gray-700 dark:text-gray-300 flex"> <input type="checkbox" class="w-6 h-8 -mt-1 mr-32 rounded-sm" />buy snacks</li>
            <li className="dark:bg-gray-600 w-11/12 border-primary-100 rounded text-center p-2 ml-4 mb-4 mt-4 center shadow-md h-10 text-gray-700 dark:text-gray-300 flex"> <input type="checkbox" class="w-6 h-8 -mt-1 mr-32 rounded-sm" />buy snacks</li>
            <li className="dark:bg-gray-600 w-11/12 border-primary-100 rounded text-center p-2 ml-4 mb-4 mt-4 center shadow-md h-10 text-gray-700 dark:text-gray-300 flex"> <input type="checkbox" class="w-6 h-8 -mt-1 mr-32 rounded-sm" />buy snacks</li>
            <li className="dark:bg-gray-600 w-11/12 border-primary-100 rounded text-center p-2 ml-4 mb-8 mt-4 center shadow-md h-10 text-gray-700 dark:text-gray-300 flex"> <input type="checkbox" class="w-6 h-8 -mt-1 mr-32 rounded-sm" />buy snacks</li>
          </ul>
          
    </div>
    </section>
  );
}

export default App;