import React from 'react'

export default function paginaciones() {
  return (
    <div className='container'>
        <div className='container-pag'>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li className="page-item"><a class="page-link" href="#">Previous</a></li>
                  <li className="page-item"><a class="page-link" href="#">1</a></li>
                  <li className="page-item"><a class="page-link" href="#">2</a></li>
                  <li className="page-item"><a class="page-link" href="#">3</a></li>
                  <li className="page-item"><a class="page-link" href="#">Next</a></li>
                  <a className='page-item'></a>
                </ul>
            </nav>
        </div>

    </div>
  )
}
