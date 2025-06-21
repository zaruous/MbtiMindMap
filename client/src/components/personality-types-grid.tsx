import { personalityTypes } from "@/data/personality-types";

export default function PersonalityTypesGrid() {
  const getGradientClass = (type: string) => {
    return `gradient-${type.toLowerCase()}`;
  };

  return (
    <section className="mt-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">16가지 성격유형 알아보기</h2>
        <p className="text-slate-600">다른 성격유형들도 살펴보세요</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {personalityTypes.map((type) => (
          <div
            key={type.type}
            className="bg-white rounded-xl p-4 border border-slate-200 hover:border-primary hover:shadow-lg transition-all duration-200 cursor-pointer group"
          >
            <div className="text-center">
              <div className={`w-12 h-12 mx-auto mb-3 ${getGradientClass(type.type)} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <span className="text-white font-bold text-sm">{type.type}</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">
                {type.nickname.split(' ').slice(-1)[0]}
              </h3>
              <p className="text-xs text-slate-500">
                {type.nickname.split(' ').slice(0, -1).join(' ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
