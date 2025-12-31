import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../../redux/features/searchSlice";

const SearchBar = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Searching for", text);
    };

    return (
        <div>
            <div>
                <form
                    className="flex gap-5 p-10 bg-transparent"
                    onSubmit={(e) => {
                        submitHandler(e);
                        dispatch(setQuery(text));
                    }}
                >
                    <input
                        type="text"
                        required
                        placeholder="Search anything..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="
        w-full px-4 py-2 text-xl rounded
        bg-(--surface)
        text-(--text)
        border-2 border-(--border)
        outline-none
        placeholder:text-(--text-muted)
        focus:border-(--primary)
        focus:ring-2 focus:ring-(--primary)/30
        transition
      "
                    />

                    <button
                        type="submit"
                        className="
        px-6 py-2 text-xl rounded
        border-2 border-(--primary)
        text-(--primary)
        hover:bg-(--primary)
        hover:text-white
        active:scale-95
        transition
      "
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
