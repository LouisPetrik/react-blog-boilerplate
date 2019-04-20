import React from "react"
import "./Table.css"


const Table = (props) => {

   const TableHead = () => {
      return props.titles.map(title => {
         return <th key={title}>{title}</th>
      })
   }

  

   

   return (
      <React.Fragment>
         <table cellSpacing="0">
            <thead>
               <tr id="firstTR">
                  <TableHead/>
               </tr>
            </thead>

            <tbody>
               <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
               </tr>
               <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
               </tr>
               <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
               </tr>
            </tbody>
         </table>
      </React.Fragment>
   )
}

export default Table
