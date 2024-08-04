import { useLoaderData,useNavigate,useLocation } from "react-router-dom"
const PaginationContainer = () => {
  const navigate = useNavigate();
  const {meta} = useLoaderData();
  const {search,pathname} = useLocation();
  const {pageCount,page} = meta.pagination;
  const pages = Array.from({length:pageCount},(_,index)=>{
    return index+1;
  })

  const handelPageChange = (input)=>{
    const newSearch = new URLSearchParams(search);
    newSearch.set('page',input);
    return navigate(`${pathname}?${newSearch.toString()}`)
  }
  if(pages.length <2){
    return null
  }
  return (
    <div className="flex justify-end mt-16">
      <div className="join">
        <button className="btn btn-xs sm:btn-md join-item"
        onClick={()=>{
          let prevPage = page -1;
          if(prevPage <1) prevPage = pageCount;
          handelPageChange(prevPage)
        }}
        >Prev</button>
        {
          pages.map(CurrentPage=>{
            return <button 
              key={page} 
              className={`btn btn-xs sm:btn-md join-item ${CurrentPage === page?'bg-base-300 border-base-300':''}`}
              onClick={()=>handelPageChange(CurrentPage)}
            >
              {CurrentPage}
            </button>
          })
        }
        <button className="btn btn-xs sm:btn-md join-item"
        onClick={()=>{
          let nextPage = page +1;
          if(nextPage >pageCount) nextPage = 1;
          handelPageChange(nextPage)
        }}
        >Next</button>
      </div>
    </div>
  )
}

export default PaginationContainer
