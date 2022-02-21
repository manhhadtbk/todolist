import React, { useRef, useState } from 'react'
import '../sass/main.scss'

const List = () => {
   const [todo, setTodo] = useState('')
   const [list, setList] = useState(
      () => {
         let text = localStorage.getItem('todos');
         if (text !== null) {
            let obj = JSON.parse(text);
            return [...obj]
         } else return []

      }
   )


   // const myArr = [11, 33]
   // const myJson = JSON.stringify(myArr)

   // localStorage.setItem('aaa', myJson)


   /////////////////////////////
   const listRef = useRef(null)
   const inputRef = useRef(null)



   return (
      <div className='list'>
         <div className='list-input'>
            <div>
               <input
                  ref={inputRef}
                  onChange={
                     (e) => {
                        // console.log(todo);
                        setTodo(e.target.value)
                     }
                  }
                  type="text"
                  autoFocus
                  style={{ fontSize: '50px', maxWidth: '300px' }}
                  onKeyUp={
                     (e) => {
                        if (e.key === "Enter") {
                           if (inputRef.current.value !== '') {
                              setList(
                                 (list) => {
                                    let myArr = [...list, todo]
                                    let myJson = JSON.stringify(myArr)
                                    localStorage.setItem('todos', myJson)

                                    return [...list, todo]
                                 }
                              )
                           }
                           inputRef.current.value = ''
                        }
                     }
                  }
               />
            </div>
         </div>

         {/* map */}
         <div
            className='list-items'
            ref={listRef}
         >
            {list.map(
               (item, index) => {
                  return <div
                     key={index}
                  >

                     <button
                        style={{
                           display: 'inline',
                           marginRight: '30px',
                           // marginBottom: '10px',
                        }}
                        onClick={
                           () => {
                              const list1 = list
                              list1.splice(index, 1)

                              setList(
                                 () => {
                                    let myArr = [...list]
                                    let myJson = JSON.stringify(myArr)
                                    localStorage.setItem('todos', myJson)

                                    return [...list1]
                                 }
                              )

                           }
                        }
                     >
                        x
                     </button>

                     <li
                        style={{
                           // display: "inline",
                           display: 'unset',
                           fontSize: '50px'
                        }}
                        onDoubleClick={
                           () => {
                              if (listRef.current.childNodes[index].childNodes[2].style.display == 'none') {
                                 listRef.current.childNodes[index].childNodes[2].style.display = 'unset'
                              } else if (listRef.current.childNodes[index].childNodes[2].style.display == 'unset') {
                                 listRef.current.childNodes[index].childNodes[2].style.display = 'none'
                              }

                              if (listRef.current.childNodes[index].childNodes[1].style.display == 'none') {
                                 listRef.current.childNodes[index].childNodes[1].style.display = 'unset'
                              } else if (listRef.current.childNodes[index].childNodes[1].style.display == 'unset') {
                                 listRef.current.childNodes[index].childNodes[1].style.display = 'none'
                              }

                              if (listRef.current.childNodes[index].childNodes[1].style.display == 'none') {
                                 listRef.current.childNodes[index].childNodes[2].value =
                                    listRef.current.childNodes[index].childNodes[1].innerHTML

                                 listRef.current.childNodes[index].childNodes[2].focus()
                              }
                           }
                        }


                     >
                        {item}
                     </li>

                     <input
                        // ref={inputItemRef}
                        type="text"
                        placeholder={`abc${index}`}
                        style={{ display: 'none', fontSize: '30px' }}

                        onBlur={
                           () => {
                              // setList(
                              //    () => {
                              //       let newList = list
                              //       newList[index] =
                              //          listRef.current.childNodes[index].childNodes[2].value


                              //       let myArr = [...newList]
                              //       let myJson = JSON.stringify(myArr)
                              //       localStorage.setItem('todos', myJson)

                              //       return [...newList]
                              //    }
                              // )

                              listRef.current.childNodes[index].childNodes[1].style.display = 'unset'
                              listRef.current.childNodes[index].childNodes[2].style.display = 'none'
                           }
                        }

                        onKeyUp={
                           (e) => {
                              if (e.key === 'Enter') {

                                 if (listRef.current.childNodes[index].childNodes[2].value === '') {
                                    const list1 = list
                                    list1.splice(index, 1)

                                    setList(
                                       () => {
                                          let myArr = [...list]
                                          let myJson = JSON.stringify(myArr)
                                          localStorage.setItem('todos', myJson)

                                          return [...list1]
                                       }
                                    )

                                    listRef.current.childNodes[index].childNodes[2].style.display = 'none'

                                 } else {
                                    setList(
                                       () => {
                                          let newList = list
                                          newList[index] =
                                             listRef.current.childNodes[index].childNodes[2].value

                                          let myArr = [...newList]
                                          let myJson = JSON.stringify(myArr)
                                          localStorage.setItem('todos', myJson)
                                          return [...newList]
                                       }
                                    )

                                    listRef.current.childNodes[index].childNodes[1].style.display = 'unset'
                                    listRef.current.childNodes[index].childNodes[2].style.display = 'none'
                                 }
                              }

                              if (e.key === 'Escape') {
                                 // setList(
                                 //    () => {
                                 //       let newList = list
                                 //       newList[index] =
                                 //          listRef.current.childNodes[index].childNodes[1].innerHTML

                                 //       let myArr = [...newList]
                                 //       let myJson = JSON.stringify(myArr)
                                 //       localStorage.setItem('todos', myJson)
                                 //       return [...newList]
                                 //    }
                                 // )

                                 listRef.current.childNodes[index].childNodes[1].style.display = 'unset'
                                 listRef.current.childNodes[index].childNodes[2].style.display = 'none'
                              }
                           }
                        }


                     />

                     {/* 
                     <button
                        style={{ marginLeft: '30px' }}
                        onClick={
                           () => {
                              // listRef.currsent.childNodes[2].style.display = 'none'

                              if (listRef.current.childNodes[index].childNodes[2].style.display == 'none') {
                                 listRef.current.childNodes[index].childNodes[2].style.display = 'unset'
                              } else if (listRef.current.childNodes[index].childNodes[2].style.display == 'unset') {
                                 listRef.current.childNodes[index].childNodes[2].style.display = 'none'
                              }

                              if (listRef.current.childNodes[index].childNodes[1].style.display == 'none') {
                                 listRef.current.childNodes[index].childNodes[1].style.display = 'unset'
                              } else if (listRef.current.childNodes[index].childNodes[1].style.display == 'unset') {
                                 listRef.current.childNodes[index].childNodes[1].style.display = 'none'
                              }

                              if (listRef.current.childNodes[index].childNodes[1].style.display == 'none') {
                                 listRef.current.childNodes[index].childNodes[2].value =
                                    listRef.current.childNodes[index].childNodes[1].innerHTML

                                 listRef.current.childNodes[index].childNodes[2].focus()
                              }


                              if (listRef.current.childNodes[index].childNodes[1].style.display != 'none') {
                                 setList(
                                    () => {
                                       let newList = list
                                       newList[index] =
                                          listRef.current.childNodes[index].childNodes[2].value


                                       console.log(

                                          listRef.current.childNodes[index].childNodes[2].value
                                       )
                                       console.log(newList)
                                       return [...newList]
                                    }
                                 )
                              }

                              console.log(
                                 // listRef.current.childNodes[index].childNodes[1].innerHTML,

                                 // listRef.current.childNodes[index].childNodes[2].style.display

                                 // index

                              )


                           }
                        }
                     >
                        edit
                     </button> */}
                  </div>
               }
            )}
         </div>
      </div >
   )
}



export default List