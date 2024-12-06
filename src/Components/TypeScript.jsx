
import { useTypewriter } from 'react-simple-typewriter';
const TypeScript = () => {
const [text] = useTypewriter({
        words: ['Top Game Reviews!', 'Latest Gaming Updates!', 'Level Up Your Skills!', 'Reviews You Can Trust!'],
        loop: 0
    })
    return (
        <div className='h-14 text-center text-4xl font-bold py-10'>
            Explore Our: <span className='text-4xl text-red-500 font-bold'>{text}</span>
        </div>
    );
};

export default TypeScript;