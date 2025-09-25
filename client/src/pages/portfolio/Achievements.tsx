import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrophyIcon, AwardIcon, StarIcon, CalendarIcon } from "lucide-react";

export const Achievements = (): JSX.Element => {
  const achievementsData = [
    {
      title: "Best Innovation Award 2023",
      organization: "Tech Summit San Francisco",
      date: "December 2023",
      description: "Recognized for developing an AI-powered code review assistant that improved development efficiency by 40%",
      icon: <TrophyIcon className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500",
      category: "Innovation"
    },
    {
      title: "Top Contributor Open Source",
      organization: "GitHub Community",
      date: "2023",
      description: "Ranked in top 1% of contributors with over 500 commits to various open source projects",
      icon: <StarIcon className="w-6 h-6" />,
      color: "from-green-400 to-blue-500",
      category: "Open Source"
    },
    {
      title: "Hackathon Winner",
      organization: "Global Developer Challenge",
      date: "September 2023",
      description: "1st place winner for building a sustainable tech solution that reduces energy consumption in data centers",
      icon: <AwardIcon className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
      category: "Competition"
    },
    {
      title: "Team Leadership Excellence",
      organization: "Tech Corp Inc.",
      date: "June 2023",
      description: "Led a cross-functional team of 12 developers to deliver a major product launch 2 weeks ahead of schedule",
      icon: <TrophyIcon className="w-6 h-6" />,
      color: "from-blue-400 to-indigo-500",
      category: "Leadership"
    },
    {
      title: "Published Research Paper",
      organization: "IEEE Computer Society",
      date: "March 2023",
      description: "Co-authored paper on 'Machine Learning Optimization in Web Applications' - cited 50+ times",
      icon: <StarIcon className="w-6 h-6" />,
      color: "from-red-400 to-rose-500",
      category: "Research"
    },
    {
      title: "Speaker at DevCon 2022",
      organization: "International Developer Conference",
      date: "November 2022",
      description: "Delivered keynote presentation on 'The Future of Full-Stack Development' to 2000+ attendees",
      icon: <AwardIcon className="w-6 h-6" />,
      color: "from-cyan-400 to-teal-500",
      category: "Speaking"
    }
  ];

  return (
    <section id="achievements" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Awards, recognitions, and milestones that highlight my professional journey and contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => (
            <Card key={index} className="group bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      {achievement.category}
                    </Badge>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                    {achievement.organization}
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.date}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Decorative element */}
                <div className={`mt-4 h-1 w-full bg-gradient-to-r ${achievement.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "15+", label: "Awards Won", color: "text-yellow-600 dark:text-yellow-400" },
            { number: "500+", label: "Open Source Contributions", color: "text-green-600 dark:text-green-400" },
            { number: "2000+", label: "Conference Attendees Reached", color: "text-blue-600 dark:text-blue-400" },
            { number: "50+", label: "Research Citations", color: "text-purple-600 dark:text-purple-400" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};