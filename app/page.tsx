import { cookies } from 'next/headers'

export default function Page() {
  // 環境変数が設定されているかチェック
  const isSupabaseConfigured = 
    process.env.NEXT_PUBLIC_SUPABASE_URL && 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 font-sans text-center">
      <div className="bg-white p-12 rounded-3xl shadow-2xl border border-slate-100 max-w-2xl">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">DOJOへようこそ！</h1>
        <p className="text-2xl text-slate-600 leading-relaxed font-medium mb-8">
          事業創造とAIUXの新たな体験を<br />一緒に楽しみましょう！
        </p>

        {/* --- 開通確認バッジ --- */}
        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${isSupabaseConfigured ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          <span className={`w-2 h-2 mr-2 rounded-full ${isSupabaseConfigured ? 'bg-green-500' : 'bg-red-500'}`}></span>
          Database: {isSupabaseConfigured ? 'Connected (開通済み)' : 'Not Connected (未設定)'}
        </div>
        {/* --------------------- */}

      </div>
    </div>
  )
}
