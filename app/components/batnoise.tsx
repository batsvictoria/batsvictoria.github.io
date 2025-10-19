//insert code for app between return (         )}
export default function Batnoise() {

    const AudioBat = `/audio/bat_noise_trimmed.wav`;
    return (


        <>
            <audio controls className="inline-flex h-12 w-50 ">
                <source src={AudioBat} type="audio/wav" />
                Your browser does not support the audio element.
            </audio>

        </>
    )
}
