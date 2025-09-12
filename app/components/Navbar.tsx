import { Link, useLocation } from 'react-router'

const Navbar = () => {
  const {pathname} = useLocation();
  return (
    <nav className="navbar navbar-blur sticky top-0 z-50 border-b border-gray-200 w-full">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16"> */}
                {/* <!-- Logo/Brand --> */}
                <Link to='/'>
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                    </div>
                    <p className="text-2xl font-bold text-gradient">Resumine</p>
                </div>
                </Link>
                
                {/* <!-- Navigation Buttons --> */}
                <div className="flex items-center space-x-4">
                    {
                      pathname !== '/upload' &&
                      <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                          </svg>
                          <span>Upload Resume</span>
                      </button>
                    }
                    <button className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2" onClick={() => {}}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                        </svg>
                        <span>Logout</span>
                    </button>
                </div>
            {/* </div>
        </div> */}
    </nav>
    // <nav className="navbar">
    //     <Link to='/'>
    //         <p className="text-2xl font-bold text-gradient">Resumine</p>
    //     </Link>
    //     {
    //       pathname !== '/upload' &&
    //         <Link to='/upload'>
    //             <p className="primary-button w-fit">Upload Resume</p>
    //         </Link>
    //     }
    // </nav>
  )
}

export default Navbar