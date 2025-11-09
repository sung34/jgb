export default function DiffSection() {
    return (
        <figure className="diff aspect-16/9" tabIndex={0}>
            <div className="diff-item-1" role="img" tabIndex={0}>
                <img alt="daisy" src="/contents/home/diff shot after.jpg" />
            </div>
            <div className="diff-item-2" role="img">
                <img
                    alt="daisy"
                    src="/contents/home/diff shot before.jpg" />
            </div>
            <div className="diff-resizer"></div>
        </figure>
    )

}