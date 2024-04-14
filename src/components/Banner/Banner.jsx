
// eslint-disable-next-line react/prop-types
const Banner = ({ type, triesNum, answer }) => {
    return type === 'happy' ? (
        <div className="banner">
            <div className="happy banner">
                <p>
                    <strong>Congratulations!</strong> Got it in {' '}
                    <strong>{triesNum} guesses</strong>.
                </p>
            </div>
        </div>
    ) : (
        <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
    )
}

export default Banner