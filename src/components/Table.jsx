import React from "react"
import "./Table.css"

let persons = ["max", "tim", "tom"]
const Table = (props) => {

   const TableHead = () => {
      return props.titles.map(title => {
         return <th key={title}>{title}</th>
      })
   }

   

   return (
      <React.Fragment>
         <table>
            <thead>
               <tr>
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
               <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
               </tr>
               <tr>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Yoshi Tannamuri</td>
                  <td>Canada</td>
               </tr>
               <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
               </tr>
            </tbody>
         </table>
      </React.Fragment>
   )
}

export default Table
