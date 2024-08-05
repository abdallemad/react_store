import { useLoaderData,useNavigate,useLocation } from "react-router-dom"
const ComplexPagination = () => {
  const navigate = useNavigate();
  const {meta} = useLoaderData();
  // console.log(meta)
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

  const addPageButton = ({pageNumber,activeClass})=>{
    return <button 
              key={page} 
              className={`btn btn-xs sm:btn-md join-item ${activeClass?'bg-base-300 border-base-300':''}`}
              onClick={()=>handelPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
  }
  const renderPageButtons = ()=>{
    const pageButtons = []
    //first button
    pageButtons.push(addPageButton({pageNumber:1,activeClass:page ==1}))
    // dots between them.
    if(page>2 )pageButtons.push(<button className="join-item button-sm sm:button-md btn" key={'dots-1'}>
      ...
    </button>)
    // current page
    if(page != 1 && page != pageCount) pageButtons.push(addPageButton({pageNumber:page,activeClass:true}))
    //dots between 
    if(page <pageCount-1)pageButtons.push(<button className="join-item button-sm sm:button-md btn" key={'dots-1'}>
      ...
    </button>)
    //last button 
    pageButtons.push(addPageButton({pageNumber:pageCount,activeClass: page == pageCount}))
    return pageButtons
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
          renderPageButtons()
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

export default ComplexPagination
