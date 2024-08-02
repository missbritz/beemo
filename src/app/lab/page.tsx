import Emoji from "@/components/emoji";

export const metadata: Metadata = {
    title: "Britta Oblan - notes",
    description: "",
};

export default async function Page() {

    return (
        <div>
            <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl capitalize pb-5">Lab</h2>
            <div className="py-10">
                <p className="text-center text-gray-400">Stay tuned — I'm cooking up something spectacular! <Emoji symbol="🧪" /></p>
            </div>
        </div>
    )
}