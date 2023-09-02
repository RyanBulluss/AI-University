

export default function StripePage() {

    const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY;
    const stripe = window.Stripe('YOUR_PUBLISHABLE_KEY');

    async function handleStripe() {
        fetch('/api/stripe/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: [
                    { name: 'AIU Premium', id: 1, quantity: 1 } 
                ]
            })
        }).then(res => {
            if(res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(({ url }) => {
            window.location = url;
        }). catch(e => {
            console.error(e.error);
        })
    }

    return(
        <div className="max-w-4xl p-4 mx-auto flex flex-col items-center bg-fourth rounded-2xl">
            <img className="w-64 m-8 rounded-3xl" src="https://cdn.dribbble.com/users/9483093/screenshots/16704246/media/a588529b3c7e0e17488eac548daa7ba6.jpg?resize=400x0" alt="Logo" />
            <h1 className="m-2 text-center font-bold text-2xl md:text-4xl">AI University Premium</h1>
            <ul className="m-4 md:m-8 md:text-xl">
                <li>- AI Teacher Creation</li>
                <li>- Unique student plaque</li>
                <li>- Access to AIU Library</li>
                <li>- AI images (coming soon)</li>
            </ul>
            <h2 className="text-xl md:text-3xl font-semibold m-2">Monthly Subscription</h2>
            <h2 className="text-xl md:text-3xl font-semibold">£4.99</h2>
            <button className="m-8 py-3 md:text-xl px-6 font-bold rounded-full bg-gradient-to-r from-first/80 to-second/80 hover:to-second/60 hover:from-first/60" onClick={handleStripe}>BUY NOW</button>
        </div>
    )
}