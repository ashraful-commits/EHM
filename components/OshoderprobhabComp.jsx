import React from 'react';

export default function OshoderprobhabComp() {
  return (
    <div className="p-5">
      <h1 className="font-bold text-blue-500 mb-4">ওষুধের প্রভাব শক্তি</h1>

      <p className=" mb-6">
        ইলেকট্রো হোমিওপ্যাথির ওষুধ সমূহ ও প্রভাবের ওপর বিশ্লেষণ করে সংযোজক ও অপহ্নৰ অৰ্থাৎ পজেটিভ ও নেগেটিভশক্তির পরিপ্রেক্ষিতে বিভাজন করা হয়েছে।
        <br />
        <strong>সংযোজক শান্তির ওষুধ (Positive Medicines):</strong> 
        যে ক্ষেত্রে দেহের কোন অবয়ব অপেক্ষাকৃত শ্লথ কিয়াশীল (Hypo-functioning) সেই ক্ষেত্রে যে ওকালি অবয়বের রিয়াকে সংযোজক শক্তি দ্বারা পূর্ণ' ক্রিয়াশীল করে সেই অধোগুলিকে সংযোজক শক্তির (Positive) ওষুধ বলা হয়। যেমন এস-ল্যাস, এস-১১, এ-১২, লান, এন-ল দ।
        <br />
        <strong>অপহ্ন শক্তির ওষুধ (Negative Medicines):</strong> 
        যে ওষুধগুলি দেহের কোন অতিক্রিয়াশীল (Hyper-functioning) অবরবের কার্যধারাকে ভেষজের অপহর শক্তি (Negative) দ্বারা গ্যাভাবিক করে সেই বালিকগুলিকে অপহর শক্তির ওষুধ বলা হয়। যেমন সি-১৫, সি-১৩, সি-১৭, ডেনেরিডস, ডামিকাগোস, হলদে তরল-বিদ্যুৎ।
        <br />
        <strong>উভয় বা সমান শক্তির ওষুধ (Neutral Medicines):</strong> 
        যে ক্ষেত্রে দেহের অবয়বসমূহের উভয়বিধ ক্রিয়াশীলতার সংখাতে কোন বিকৃত লক্ষণ পরিস্ফুট হয়, সেই ক্ষেত্রে এই শ্রেণীর ওষুধগুলি সমষ্টিগত শক্তি দ্বারা উভয় রিয়াশীল বিশৃংখলার প্রশমনের প্রস্তাব প্রদান করে। যেমন ফেরিফাগোস, লিম্ফেটিকোস, স্ট্রোফোলোসো, জিয়াপন (S-10), শ্বেত তরল বিদ্যুৎ।
      </p>

      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center  mb-6">Electro-Homoeopathy Medicines</h2>

        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className=" ">
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Medicines</th>
            </tr>
          </thead>
          <tbody>
            {/* Positive Medicines */}
            <tr className="">
              <td className="py-2 px-4 font-medium ">Positive Medicines (সংযোজক শক্তির)</td>
              <td className="py-2 px-4 ">S-Lass (এস-ল্যাস), S-11 (এস-১১), A-12 (এ-১২), Lan (লান), N-L D (এন-ল দ)</td>
            </tr>

            {/* Negative Medicines */}
            <tr className="">
              <td className="py-2 px-4 font-medium ">Negative Medicines (অপহ্ন শক্তির)</td>
              <td className="py-2 px-4 ">C-15 (সি-১৫), C-13 (সি-১৩), C-17 (সি-১৭), Deneroids (ডেনেরিডস), Damicagos (ডামিকাগোস), Halde Liquid Electricity (হলদে তরল-বিদ্যুৎ)</td>
            </tr>

            {/* Neutral Medicines */}
            <tr className="">
              <td className="py-2 px-4 font-medium ">Neutral Medicines (উভয় শক্তির)</td>
              <td className="py-2 px-4 ">Ferephagos (ফেরিফাগোস), Lymphaticos (লিম্ফেটিকোস), Stropholoso (স্ট্রোফোলোসো), Jiapan - S-10 (জিয়াপন - S-10), Shwet Liquid Electricity (শ্বেত তরল বিদ্যুৎ)</td>
            </tr>

            {/* Special Medicines */}
            <tr className="">
              <td className="py-2 px-4 font-medium ">Special Medicines (বিশেষ ওষুধ)</td>
              <td className="py-2 px-4 ">Cancerosos (ক্যানসেরাসোস), Angioticos (এনজিওটিকোস)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
