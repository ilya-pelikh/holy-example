import React from 'react';
import { tags as t } from '@lezer/highlight';
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';

import { EditorStyled, StyledEditorOnboarding } from './editor.styled';

const customTheme = createTheme({
    theme: 'dark',
    settings: {
        border: 'white',
        background: '#010B02', // цвет фона под кодом
        backgroundImage: '',
        foreground: 'white', // цвет кода
        caret: '#36FFFF', // цвет каретки
        selection: '#4C4E52', // цвет выделенного кода
        selectionMatch: '#4C4E52', // цвет текста по ctrl + F
        lineHighlight: '#010B02', //
        gutterBackground: '#010B02', // цвет фона под нумерацией строк кода
        gutterForeground: 'grey', // цвет цифр в нумерации строк кода
    },
    styles: [
        { tag: t.comment, color: '#689450' },
        { tag: t.variableName, color: '#DCCE7F' },
        { tag: [t.string, t.special(t.brace)], color: '#8A4E38' },
        { tag: t.number, color: '#DCCE7F' },
        { tag: t.bool, color: '#4FC0F9' },
        { tag: t.null, color: '#5699D1' },
        { tag: t.keyword, color: '#5699D1' },
        { tag: t.operator, color: '#D4D4D4' },
        { tag: t.className, color: '#DCCE7F' },
        { tag: t.definition(t.typeName), color: '#DCCE7F' },
        { tag: t.typeName, color: '#45A3E8' },
        { tag: t.angleBracket, color: 'grey' },
        { tag: t.tagName, color: '#4EC59C' },
        { tag: t.attributeName, color: '#45A3E8' },
    ],
});

const Editor = ({ enteredCode, setEnteredCode, onboardingStep }) => {
    const onChange = React.useCallback((val, viewUpdate) => {
        setEnteredCode(val);
    }, []);

    return (
        <>
            { /* Поле для кода */}
            <EditorStyled onboardingStep={onboardingStep}>
                <CodeMirror
                    basicSetup={{
                        highlightActiveLine: false,
                    }}
                    value={enteredCode}
                    height="60vh"
                    theme={customTheme}
                    onChange={onChange}
                    extensions={[javascript({ jsx: true })]}
                />
            </EditorStyled>

            { /* Онбординг */}
            <StyledEditorOnboarding onboardingStep={onboardingStep}>
                В этом окне необходимо воспроизвести первоначальный код для получения соответствующего результата
            </StyledEditorOnboarding>
        </>
    )
}

export default Editor;
