function SocialIcon({
    name,
    icon,
    background,
    link,
    download,
}: {
    name: string;
    icon: any;
    background: string;
    link: string;
    download: string;
}) {
    return (
        <li className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${background}`}>
            {download ? (
                <a className="flex justify-between items-center w-full" href={link} target="_blank" download={download}>
                    <>
                        {name} {icon}
                    </>
                </a>
            ) : (
                <a className="flex justify-between items-center w-full" href={link} target="_blank">
                    <>
                        {name} {icon}
                    </>
                </a>
            )}
        </li>
    );
}

export default SocialIcon;
