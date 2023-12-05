'use client';

export default function SubmitForm({ user } : any) {
    
    const submitPost = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const formData =  new FormData(e.currentTarget);

        const id = Math.random().toString(16).slice(2);

        
        const body = {
            title: formData.get('title'),
            id: id,
            author: user?.name ?? '',
            content: formData.get('content')
        }

        const res = await fetch('/api/contentsubmit', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        await res.json;

        redirect('/blog');
    }

    return(
        <div {/**className="flex flex-col place-items-center 
    items-center"*/}>
            <h1>Submit a post</h1>
            
            <form onSubmit={submitPost}>
                <input
                    className=" text-white bg-gray-700" 
                    type='text'
                    id='title'
                    placeholder='Enter post title'
                />
                <input
                    className=" text-white bg-gray-700" 
                    type='text'
                    id='content'
                    placeholder='Enter post description'
                />
                
                <button type="submit">
                    Submit post
                </button>
            </form>
        </div>
    )

}