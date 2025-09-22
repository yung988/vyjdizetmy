"use client"

import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, LineChart, Line, ResponsiveContainer } from "recharts"
import { useEffect, useState } from "react"

const successData = [
  { name: "Úspěšné případy", value: 95, color: "#9CAF88" },
  { name: "Ostatní", value: 5, color: "#e5e7eb" }
]

const improvementData = [
  { category: "Úzkost", before: 20, after: 85, improvement: 65 },
  { category: "Energie", before: 25, after: 90, improvement: 65 },
  { category: "Sebedůvěra", before: 30, after: 88, improvement: 58 },
  { category: "Vztahy", before: 35, after: 82, improvement: 47 },
  { category: "Kariéra", before: 40, after: 85, improvement: 45 }
]

const timelineData = [
  { session: "1. sezení", improvement: 25 },
  { session: "2. sezení", improvement: 45 },
  { session: "3. sezení", improvement: 70 },
  { session: "4. sezení", improvement: 85 },
  { session: "5. sezení", improvement: 95 }
]

export function StatsSection() {
  const [animatedValues, setAnimatedValues] = useState({
    clients: 0,
    success: 0,
    experience: 0
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        clients: 500,
        success: 95,
        experience: 10
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Výsledky, které mluví za vše
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Reálná data z více než 10 let praxe s metodou PSYCH-K®
          </p>
        </div>

        {/* Hlavní statistiky */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-5xl font-bold text-primary mb-2">
                {animatedValues.clients}+
              </CardTitle>
              <CardDescription className="text-lg">Spokojených klientů</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Za posledních 10 let
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-5xl font-bold text-primary mb-2">
                {animatedValues.success}%
              </CardTitle>
              <CardDescription className="text-lg">Úspěšnost terapie</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-32 h-20 mx-auto mb-4">
                <ChartContainer
                  config={{
                    success: {
                      label: "Úspěšnost",
                      color: "#8b5a8c",
                    },
                  }}
                  className="w-full h-full"
                >
                  <AreaChart data={[{ name: "Úspěch", value: 95 }]}>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#8b5a8c"
                      fill="#8b5a8c"
                      fillOpacity={0.3}
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Měřeno po 6 měsících
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-5xl font-bold text-primary mb-2">
                {animatedValues.experience}+
              </CardTitle>
              <CardDescription className="text-lg">Let zkušeností</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                Certifikovaný facilitátor
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Grafy zlepšení */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Oblasti zlepšení</CardTitle>
              <CardDescription>
                Průměrné zlepšení v jednotlivých oblastech života
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {improvementData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.category}</span>
                      <Badge variant="outline" className="text-primary">
                        +{item.improvement}%
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Před: {item.before}%</span>
                        <span>Po: {item.after}%</span>
                      </div>
                      <Progress value={item.after} className="h-3" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Průběh zlepšení</CardTitle>
              <CardDescription>
                Typický vývoj během terapeutického procesu
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ChartContainer
                  config={{
                    improvement: {
                      label: "Zlepšení (%)",
                      color: "#8b5a8c",
                    },
                  }}
                  className="w-full h-full"
                >
                  <LineChart data={timelineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="session" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="improvement"
                      stroke="#8b5a8c"
                      strokeWidth={3}
                      dot={{ fill: "#8b5a8c", strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: "#8b5a8c", strokeWidth: 2, fill: "#fff" }}
                    />
                  </LineChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial s daty */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-8">
            <div className="text-center">
              <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
               <blockquote className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
                 &quot;Za 3 sezení jsem dosáhla většího pokroku než za 2 roky klasické terapie. 
                 Moje úroveň energie vzrostla z 20% na 90%.&quot;
               </blockquote>
              <cite className="text-muted-foreground">
                - Marie K., Praha
              </cite>
              <div className="flex justify-center gap-8 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">20%</div>
                  <div className="text-sm text-muted-foreground">Před</div>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">90%</div>
                  <div className="text-sm text-muted-foreground">Po</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}