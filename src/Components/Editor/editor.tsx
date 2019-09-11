import React, { useRef, useEffect } from 'react';

// @ts-ignore
import wangEditor from 'wangeditor';

// import UMeditor from './umeditor/umeditor';

// import './editor.scss';

// function Editor (props: IProps) {

//   const EditorEl = useRef(null)

//   let toolbar = ['formula']

//   useEffect(()=>{
//     // @ts-ignore
//     UMeditor.getEditor('test', {toolbar: toolbar})
//   })

//   return(
//     <div id="test" ref={EditorEl}></div>
//   )
// }

// export default Editor
interface IProps {
  content: string
  onChange: (res:string)=>void
}

function Editor (props: IProps) {
  const EditorEl = useRef(null)

  function handleChange(res:string) {
    props.onChange(res)
  }

  useEffect(()=>{
    const editor = new wangEditor(EditorEl.current)
    editor.customConfig.menus = ['table']
    editor.customConfig.zIndex = 2
    editor.customConfig.onchange = (html:string) => {
      handleChange(html)
    }
    editor.create()
    editor.txt.html(props.content)
  })

  return(
    <div ref={EditorEl}></div>
  )
}

export default Editor
