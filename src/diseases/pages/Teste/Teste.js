import React, { useCallback, useRef, useState } from 'react';
import InputTags from '../../../shared/components/InputTags/InputTags';

function Teste() {
    const [tags, setTags] = useState([])

    const [suggestions, setSuggestions] = useState([
        { id: 1, name: "Apples" },
        { id: 2, name: "Pears" },
        { id: 3, name: "Bananas" },
        { id: 4, name: "Mangos" },
        { id: 5, name: "Lemons" },
        { id: 6, name: "Apricots" }
    ])

    const onDelete = useCallback((tagIndex) => {
        setTags(tags.filter((_, i) => i !== tagIndex))
    }, [tags])

    const onAddition = useCallback((newTag) => {
        setTags([...tags, newTag])
    }, [tags])

    return (
        <InputTags
            tags={tags}
            suggestions={suggestions}
            onDelete={onDelete}
            onAddition={onAddition}
        />
    )
}

export default Teste;