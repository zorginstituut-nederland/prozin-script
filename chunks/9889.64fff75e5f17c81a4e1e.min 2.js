"use strict";(self.webpackChunk_patternslib_patternslib=self.webpackChunk_patternslib_patternslib||[]).push([[9889],{9889:function(e,t,n){n.r(t),n.d(t,{CodeBlock:function(){return i},backtickInputRegex:function(){return o},default:function(){return i},tildeInputRegex:function(){return s}});var r=n(19958),a=n(2376);const o=/^```([a-z]+)?[\s\n]$/,s=/^~~~([a-z]+)?[\s\n]$/,i=r.Node.create({name:"codeBlock",addOptions:()=>({languageClassPrefix:"language-",exitOnTripleEnter:!0,exitOnArrowDown:!0,HTMLAttributes:{}}),content:"text*",marks:"",group:"block",code:!0,defining:!0,addAttributes(){return{language:{default:null,parseHTML:e=>{var t;const{languageClassPrefix:n}=this.options,r=[...(null===(t=e.firstElementChild)||void 0===t?void 0:t.classList)||[]].filter((e=>e.startsWith(n))).map((e=>e.replace(n,"")))[0];return r||null},rendered:!1}}},parseHTML:()=>[{tag:"pre",preserveWhitespace:"full"}],renderHTML({node:e,HTMLAttributes:t}){return["pre",(0,r.mergeAttributes)(this.options.HTMLAttributes,t),["code",{class:e.attrs.language?this.options.languageClassPrefix+e.attrs.language:null},0]]},addCommands(){return{setCodeBlock:e=>({commands:t})=>t.setNode(this.name,e),toggleCodeBlock:e=>({commands:t})=>t.toggleNode(this.name,"paragraph",e)}},addKeyboardShortcuts(){return{"Mod-Alt-c":()=>this.editor.commands.toggleCodeBlock(),Backspace:()=>{const{empty:e,$anchor:t}=this.editor.state.selection,n=1===t.pos;return!(!e||t.parent.type.name!==this.name)&&(!(!n&&t.parent.textContent.length)&&this.editor.commands.clearNodes())},Enter:({editor:e})=>{if(!this.options.exitOnTripleEnter)return!1;const{state:t}=e,{selection:n}=t,{$from:r,empty:a}=n;if(!a||r.parent.type!==this.type)return!1;const o=r.parentOffset===r.parent.nodeSize-2,s=r.parent.textContent.endsWith("\n\n");return!(!o||!s)&&e.chain().command((({tr:e})=>(e.delete(r.pos-2,r.pos),!0))).exitCode().run()},ArrowDown:({editor:e})=>{if(!this.options.exitOnArrowDown)return!1;const{state:t}=e,{selection:n,doc:r}=t,{$from:a,empty:o}=n;if(!o||a.parent.type!==this.type)return!1;if(!(a.parentOffset===a.parent.nodeSize-2))return!1;const s=a.after();if(void 0===s)return!1;return!r.nodeAt(s)&&e.commands.exitCode()}}},addInputRules(){return[(0,r.textblockTypeInputRule)({find:o,type:this.type,getAttributes:e=>({language:e[1]})}),(0,r.textblockTypeInputRule)({find:s,type:this.type,getAttributes:e=>({language:e[1]})})]},addProseMirrorPlugins(){return[new a.Sy({key:new a.H$("codeBlockVSCodeHandler"),props:{handlePaste:(e,t)=>{if(!t.clipboardData)return!1;if(this.editor.isActive(this.type.name))return!1;const n=t.clipboardData.getData("text/plain"),r=t.clipboardData.getData("vscode-editor-data"),o=r?JSON.parse(r):void 0,s=null==o?void 0:o.mode;if(!n||!s)return!1;const{tr:i}=e.state;return i.replaceSelectionWith(this.type.create({language:s})),i.setSelection(a.Bs.near(i.doc.resolve(Math.max(0,i.selection.from-2)))),i.insertText(n.replace(/\r\n?/g,"\n")),i.setMeta("paste",!0),e.dispatch(i),!0}}})]}})}}]);
//# sourceMappingURL=9889.64fff75e5f17c81a4e1e.min.js.map