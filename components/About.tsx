"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, GitBranch, Globe, Code2, Star, GitFork, Eye } from "lucide-react";

const timeline = [
  {
    year: "2019年12月〜2021年9月",
    title: "企業向けホームページ制作・Webサイト開発",
    role: "個人事業・業務委託",
    bullets: [
      "企業向けホームページの企画・設計",
      "HTML/CSS/JavaScriptによるWebサイト制作・レスポンシブ対応",
      "WebページのUI・レイアウト設計",
      "お問い合わせフォーム等の機能実装",
      "既存Webサイトの改修・更新",
    ],
    results: [
      "顧客要件に応じたWebサイトを設計・開発し、納期内での公開を実現",
      "ユーザビリティを考慮したレスポンシブWebサイトの制作に対応",
      "既存Webサイトの改修・機能追加を通じて、運用性・利便性の向上に貢献",
    ],
    color: "bg-sky-500",
  },
  {
    year: "2021年10月〜2024年3月",
    title: "クラウド対応Webシステム開発",
    role: "フルスタックエンジニア",
    bullets: [
      "React / TypeScriptによるフロントエンド開発",
      "Node.jsによるAPI開発・REST API設計",
      "データベース設計",
      "AWS環境へのデプロイ",
      "コードレビュー対応",
    ],
    results: [
      "業務プロセス改善による生産性向上へ貢献",
      "安定したWebサービス提供を実現",
    ],
    color: "bg-indigo-500",
  },
  {
    year: "2021年10月〜2024年3月",
    title: "EC一元管理システム 商品・在庫同期機能開発",
    role: "複数ECモールのSaaS開発",
    bullets: [
      "Next.js管理画面開発",
      "NestJSによるバックエンド開発",
      "EC API連携",
      "AWS（ECS / RDS / S3）環境対応",
    ],
    results: [],
    color: "bg-purple-500",
  },
  {
    year: "2024年4月〜2026年1月",
    title: "製造・流通業界向け写真・点検帳票管理システム開発",
    role: "業務委託",
    bullets: [
      "PHP（Laravel）API開発",
      "React画面改修",
      "MySQL改善",
      "テスト、保守運用",
    ],
    results: [],
    color: "bg-emerald-500",
  },
  {
    year: "2026年2月〜現在",
    title: "企業向けWebサイト・業務システム開発プロジェクト",
    role: "企業・個人向けのWebサイト・Webシステム・業務システム開発を担当",
    bullets: [
      "Webサイト・Webシステムの画面設計、UI設計",
      "React / Next.jsを用いたWebアプリケーション開発",
      "GitHubを用いたソースコード管理",
      "単体テスト、結合テスト、動作確認",
      "フルスタックで大応",
    ],
    results: [],
    color: "bg-amber-500",
  },

];

const values = [
  {
    icon: "🎯",
    title: "ビジネス視点のエンジニアリング",
    desc: "技術だけでなく、ビジネスの課題・目標を深く理解した上で最適な解を提案します。",
    gradient: "from-sky-50 to-cyan-50",
    border: "border-sky-100",
  },
  {
    icon: "⚡",
    title: "スピードと品質を両立",
    desc: "アジャイルな開発スタイルで、速く・確実にプロダクトを届けます。",
    gradient: "from-indigo-50 to-purple-50",
    border: "border-indigo-100",
  },
  {
    icon: "🔒",
    title: "セキュリティファースト",
    desc: "設計段階からセキュリティを考慮。安心して運用できるシステムを構築します。",
    gradient: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
  },
  {
    icon: "🤝",
    title: "長期パートナーとして",
    desc: "単発の開発で終わらず、運用・改善フェーズも含めた長期的なパートナーシップを大切にします。",
    gradient: "from-amber-50 to-orange-50",
    border: "border-amber-100",
  },
];

function useReveal() {
  const ref  = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

export default function About() {
  const header  = useReveal();
  const left    = useReveal();
  const right   = useReveal();

  return (
    <section id="about" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* セクションヘッダー */}
        <div
          ref={header.ref}
          className="text-center mb-16"
          style={{
            opacity:    header.visible ? 1 : 0,
            transform:  header.visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-600 tracking-wide">ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-4 section-title-line">
            プロフィール
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-6 leading-relaxed">
            5年以上のフルスタック開発経験をもとに、アイデアを価値あるプロダクトへ変換します。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* 左：プロフィールカード + バリュー */}
          <div
            ref={left.ref}
            style={{
              opacity:    left.visible ? 1 : 0,
              transform:  left.visible ? "translateX(0)" : "translateX(-60px)",
              transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {/* プロフィールカード */}
            <div className="bg-gradient-to-br from-sky-50 to-indigo-50 rounded-3xl p-8 border border-sky-100 mb-8 card-shine shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div className="flex items-start gap-5">
                {/* アバター */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-3xl shadow-lg animate-pulse-glow">
                    👨‍💻
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-400 border-2 border-white flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-800">倉金 睦</h3>
                  <p className="text-sky-600 font-semibold text-sm mt-0.5">
                    フルスタックエンジニア / Full-Stack Developer
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["群馬県桐生市在住", "フリーランス", "即日対応可"].map((badge) => (
                      <span
                        key={badge}
                        className="px-2.5 py-1 bg-white rounded-full text-xs font-medium text-gray-600 border border-gray-200 shadow-sm hover:border-sky-300 hover:text-sky-600 transition-colors duration-200"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mt-6">
                群馬県桐生市在住。主にWebシステムやWebサービスの開発に携わってきまして、現在はフロントエンドを中心としたフルスタックエンジニアとして仕事をしています。
ユーザーにとって使いやすいUI/UXと、将来的な保守・拡張を考慮した設計を大切にし、要件や目的に応じた技術選定から実装まで柔軟に対応しています。
アイデアを形にすることを大切にし、品質とスピードの両立を意識したWeb開発に取り組んでいます。
              </p>

              <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <a
                  href="mailto:mutsuminkk@gmail.com"
                  className="hover:text-sky-600 transition-colors break-all"
                >
                  mutsuminkk@gmail.com
                </a>
              </div>

              {/* GitHub リポジトリ情報 */}
              <div className="mt-5 rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                {/* リポジトリヘッダー */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-700" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <a
                      href="https://github.com/Ostsuka/kuragane-pro-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-gray-800 hover:text-sky-600 transition-colors"
                    >
                      kuragane-pro-dev
                    </a>
                    <span className="text-xs px-1.5 py-0.5 rounded-full border border-gray-300 text-gray-500 font-medium">
                      Public
                    </span>
                  </div>
                  <a
                    href="https://kuragane-pro-dev.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-sky-600 hover:text-sky-700 font-medium transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    サイトを見る
                  </a>
                </div>

                {/* 言語バー */}
                <div className="px-4 pt-3 pb-1">
                  <div className="flex rounded-full overflow-hidden h-2 w-full">
                    <div className="bg-blue-500" style={{ width: "88.2%" }} title="TypeScript 88.2%" />
                    <div className="bg-purple-500" style={{ width: "11.3%" }} title="CSS 11.3%" />
                    <div className="bg-yellow-400" style={{ width: "0.5%" }} title="JavaScript 0.5%" />
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                      TypeScript <span className="text-gray-400">88.2%</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" />
                      CSS <span className="text-gray-400">11.3%</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                      JavaScript <span className="text-gray-400">0.5%</span>
                    </span>
                  </div>
                </div>

                {/* ステータス */}
                <div className="flex items-center gap-4 px-4 py-3 text-xs text-gray-500 border-t border-gray-100 mt-1">
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-3.5 h-3.5" />
                    master
                  </span>
                  <span className="flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5" />
                    23 Commits
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" />
                    0
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    0
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    0
                  </span>
                </div>

                {/* デプロイ情報 */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-emerald-50 border-t border-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                  <span className="text-xs font-semibold text-emerald-700">Production</span>
                  <span className="text-xs text-gray-400 ml-auto">Deployments: 20</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { value: "5年+", label: "経験年数" },
                  { value: "50+",  label: "支援企業" },
                  { value: "98%",  label: "継続率" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                    style={{
                      opacity:    left.visible ? 1 : 0,
                      transform:  left.visible ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 0.6s ease ${0.6 + i * 0.1}s, transform 0.6s ease ${0.6 + i * 0.1}s`,
                    }}
                  >
                    <div className="text-xl font-black text-gradient">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* バリューカード */}
            <div className="grid grid-cols-2 gap-3">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`bg-gradient-to-br ${v.gradient} rounded-2xl p-4 border ${v.border} card-hover card-shine`}
                  style={{
                    opacity:    left.visible ? 1 : 0,
                    transform:  left.visible ? "scale(1)" : "scale(0.9)",
                    transition: `opacity 0.6s ease ${0.8 + i * 0.1}s, transform 0.6s ease ${0.8 + i * 0.1}s`,
                  }}
                >
                  <span className="text-2xl mb-2 block animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                    {v.icon}
                  </span>
                  <h4 className="text-xs font-bold text-gray-800 mb-1 leading-tight">{v.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 右：タイムライン */}
          <div
            ref={right.ref}
            style={{
              opacity:    right.visible ? 1 : 0,
              transform:  right.visible ? "translateX(0)" : "translateX(60px)",
              transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s",
            }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-gradient-to-b from-sky-500 to-indigo-500 block" />
              キャリア年表
            </h3>
            <div className="relative pl-10">
              {/* 縦ライン */}
              <div className="timeline-line" />

              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="relative mb-8 last:mb-0"
                  style={{
                    opacity:    right.visible ? 1 : 0,
                    transform:  right.visible ? "translateX(0)" : "translateX(30px)",
                    transition: `opacity 0.65s ease ${0.3 + i * 0.12}s, transform 0.65s ease ${0.3 + i * 0.12}s`,
                  }}
                >
                  {/* ドット */}
                  <div
                    className={`absolute -left-10 top-1 w-5 h-5 rounded-full ${item.color} border-2 border-white shadow-md flex items-center justify-center`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm card-hover">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs font-black text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-800 mb-0.5">{item.title}</h4>
                    {item.role && (
                      <p className="text-xs text-indigo-500 font-medium mb-2">{item.role}</p>
                    )}
                    {item.bullets.length > 0 && (
                      <ul className="mb-2 space-y-0.5">
                        {item.bullets.map((b, bi) => (
                          <li key={bi} className="text-xs text-gray-600 leading-relaxed flex gap-1.5">
                            <span className="text-sky-400 mt-0.5 flex-shrink-0">▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.results.length > 0 && (
                      <div className="mt-2 border-t border-gray-50 pt-2">
                        <p className="text-xs font-semibold text-gray-500 mb-1">実績</p>
                        <ul className="space-y-0.5">
                          {item.results.map((r, ri) => (
                            <li key={ri} className="text-xs text-gray-500 leading-relaxed flex gap-1.5">
                              <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
