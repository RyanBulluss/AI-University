

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
        <div>
            <button onClick={handleStripe}>PAY</button>
            <script src="https://js.stripe.com/v3/"></script>
        </div>
    )
}