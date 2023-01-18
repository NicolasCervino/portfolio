function SocialIcon({ name, icon, background, link }: { name: string; icon: any; background: string; link: string }) {
    return (
        <li className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${background}`}>
            <a className="flex justify-between items-center w-full text-gray-300" href={link} target="_blank" >
                <>
                    {name} {icon}
                </>
            </a>
            
        </li>
    );
}

export default SocialIcon;
