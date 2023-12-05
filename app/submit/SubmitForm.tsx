'use client';

// className="flex flex-col place-items-center items-center" 

export function SubmitForm({ user }: any) {
    

    const submitPost = async (e: React.FormEvent<HTMLFormElement>) => {
         
        e.preventDefault();

        const formData =  new FormData(e.currentTarget);
        const uniqueID = Math.random().toString(16).slice(2);
        
        console.log('Here is user')
        console.log(user);

        const body = {
            title: formData.get('postTitle'),
            id: uniqueID,
            author: user?.name ?? '',
            content: formData.get('postContent'),
            authorid: user?.email ?? 'testemail',
        }

        console.log('Here is body')
        console.log(body);


        const res = await fetch('/api/contentsubmit', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        await res.json;
    }

    

    
    return(
        <div>
            <h1>Submit a post</h1>
            
            <form onSubmit={submitPost}>
                <input
                    className=" text-white bg-gray-700" 
                    type='text'
                    name='postTitle'
                    placeholder='Enter post title'
                />
                <input
                    className=" text-white bg-gray-700" 
                    type='text'
                    name='postContent'
                    placeholder='Enter post description'
                />
                
                <button type="submit">
                    Submit post
                </button>
            </form>
        </div>
    )

}