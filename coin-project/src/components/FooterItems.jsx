const FooterItems = ({ data: { header, item1, item2, item3, item4, item5, item6 } }) => {
  return (
    <div>
      <h1 className="font-vazirExtraBold font-black text-white mb-2.5 lg:mb-5 text-lg lg:text-[22px]">
        {header}
      </h1>

      <ul className="font-vazirRegular text-gray-300 text-sm 1120:text-[16px] footer-items">
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
        <li>{item4}</li>
        <li>{item5}</li>
        <li>{item6}</li>
      </ul>
    </div>
  );
};

export default FooterItems;