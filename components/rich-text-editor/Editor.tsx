"use client";

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Menubar } from './Menubar';
import TextAlign from "@tiptap/extension-text-align"

export function RichTextEditor({field}: {field: any}) {
    const editor = useEditor({
        extensions: [
            StarterKit, 
            TextAlign.configure({
                types: ['heading', 'paragraph']
            }),
        ],
        editorProps: {
            attributes: {
                class: 'tiptap min-h-[300px] p-4 focus:outline-none !w-full !max-w-none text-foreground'
            }
        },
        immediatelyRender: false,
        onUpdate: ({editor}) => {
            field.onChange(JSON.stringify(editor.getJSON()))
        },
        content: field.value ? JSON.parse(field.value) : '<p>Enter description</p>',
    })

    return(
        <div className='w-full border border-input rounded-lg overflow-hidden dark:bg-input/30'>
            <Menubar editor={editor}/>
            <EditorContent editor={editor}/>
            
            <style dangerouslySetInnerHTML={{__html: `
                .tiptap h1 { font-size: 2.25rem !important; font-weight: bold !important; margin: 1rem 0 !important; }
                .tiptap h2 { font-size: 1.875rem !important; font-weight: bold !important; margin: 1rem 0 !important; }
                .tiptap h3 { font-size: 1.5rem !important; font-weight: bold !important; margin: 1rem 0 !important; }
                .tiptap ul { list-style-type: disc !important; padding-left: 1.5rem !important; margin: 1rem 0 !important; }
                .tiptap ol { list-style-type: decimal !important; padding-left: 1.5rem !important; margin: 1rem 0 !important; }
                .tiptap p { margin: 0.5rem 0 !important; }
            `}} />
        </div>
    )
}