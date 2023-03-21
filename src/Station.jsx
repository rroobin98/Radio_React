export default function Station(props) {
    const { station } = props;
  
    return (
      <div
        className="flex p-4 m-7 border w-fit "
        style={{ backgroundColor: `#${station.color}` }}
      >
        <img className="w-40" src={station.image} />
        <audio
          className="flex self-center"
          controls
          src={station.liveaudio.url}
        ></audio>
      </div>
    );
  }