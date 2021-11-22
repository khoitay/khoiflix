import React from 'react'
import Pagination from '@mui/material/Pagination'

function PaginationCustom({numOfPages = 10, setPage}) {
  const handlePageChange = (e) => {
    window.scroll(0, 0)
    setPage(e.target.textContent)
  }

  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
      <Pagination count={numOfPages} onChange={e => handlePageChange(e)} color="primary" />
    </div>
  )
}

export default PaginationCustom
